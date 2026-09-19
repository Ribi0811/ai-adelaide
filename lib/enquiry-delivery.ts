import type { SheetSaveResult } from "./lead-sheet";

type NotificationResult = { ok: boolean; error?: string };
type Channels = {
  telegram: () => Promise<NotificationResult>;
  email: () => Promise<NotificationResult>;
  sheet: () => Promise<SheetSaveResult>;
  local: () => Promise<boolean>;
};

export async function deliverContactEnquiry(channels: Channels) {
  // Start all channels together. A slow or failed Sheet cannot delay the start
  // of the Telegram notification, nor turn a delivered enquiry into a failure.
  const [telegramResult, emailResult, sheetResult, localResult] = await Promise.allSettled([
    Promise.resolve().then(channels.telegram),
    Promise.resolve().then(channels.email),
    Promise.resolve().then(channels.sheet),
    Promise.resolve().then(channels.local),
  ]);
  const telegram = telegramResult.status === "fulfilled" ? telegramResult.value : { ok: false, error: "Telegram delivery failed" };
  const email = emailResult.status === "fulfilled" ? emailResult.value : { ok: false, error: "Email delivery failed" };
  const sheet: SheetSaveResult = sheetResult.status === "fulfilled" ? sheetResult.value : { ok: false, status: "write_failed" };
  const localPersisted = localResult.status === "fulfilled" && localResult.value;
  const persisted = sheet.ok || localPersisted;
  return { ok: telegram.ok || email.ok || persisted, telegram, email, sheet, localPersisted, persisted };
}
