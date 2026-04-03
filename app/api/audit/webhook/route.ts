import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2026-02-25.clover' })
  : null;

export async function POST(req: Request) {
  if (!stripe || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Stripe is not configured' }, { status: 500 });
  }

  const signature = headers().get('stripe-signature');
  if (!signature) return NextResponse.json({ error: 'Missing signature' }, { status: 400 });

  const body = await req.text();

  try {
    const event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log('Stripe payment completed for audit', {
        sessionId: session.id,
        email: session.customer_details?.email,
      });
      // V1: report generation happens on /audit/report page after redirect.
      // Webhook is kept for future reliability enhancements.
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Stripe webhook failed', error);
    return NextResponse.json({ error: 'Webhook signature failed' }, { status: 400 });
  }
}
