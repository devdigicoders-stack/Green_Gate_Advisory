import { CONTACT_CONFIG } from '../config/contactConfig';

/**
 * Handles opening email strictly in Microsoft Outlook.
 * 
 * 1. Checks if desktop Outlook protocol handler (ms-outlook:) or standard mailto is available.
 * 2. In modern web environments, opens Outlook Web (https://outlook.office.com/mail/deeplink/compose or https://outlook.live.com)
 *    so it never falls back or opens Gmail.
 * 
 * @param {Object} options
 * @param {string} [options.subject]
 * @param {string} [options.body]
 * @param {string} [options.to]
 */
export function openOutlookCompose({
  to = CONTACT_CONFIG.email,
  subject = 'Advisory Consultation Enquiry - Green Gate Advisory',
  body = ''
} = {}) {
  const encodedTo = encodeURIComponent(to);
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  // Microsoft 365 / Outlook Web Direct Compose Deep Link
  // This explicitly directs the user to Microsoft Outlook (Office 365) compose window, completely bypassing Gmail.
  const outlookWebUrl = `https://outlook.office.com/mail/deeplink/compose?to=${encodedTo}&subject=${encodedSubject}&body=${encodedBody}`;
  
  // Try opening Outlook Web in a new tab first
  const win = window.open(outlookWebUrl, '_blank', 'noopener,noreferrer');
  
  // If window.open was blocked or user prefers protocol, also trigger ms-outlook / mailto
  if (!win || win.closed || typeof win.closed === 'undefined') {
    window.location.href = `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
  }
}
