/**
 * Frontend API client for submitting advisory enquiries.
 * Interacts with POST /api/enquiries on the Express backend service.
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050';

/**
 * Submits an advisory consultation or proposal request enquiry.
 * 
 * @param {Object} payload Sanitized enquiry form payload
 * @returns {Promise<{success: boolean, data?: any, error?: string, validationErrors?: Object}>}
 */
export async function submitEnquiry(payload) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000); // 15-second timeout

  try {
    const response = await fetch(`${API_BASE_URL}/api/enquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      if (response.status === 429) {
        return {
          success: false,
          error: data.error || 'Too many submissions. Please wait a few minutes before trying again.'
        };
      }

      if (response.status === 400 && data.errors) {
        return {
          success: false,
          error: data.error || 'Please correct the highlighted fields.',
          validationErrors: data.errors
        };
      }

      return {
        success: false,
        error: data.error || `Server responded with status ${response.status}. Please try again.`
      };
    }

    return {
      success: true,
      data
    };
  } catch (err) {
    clearTimeout(timeoutId);

    if (err.name === 'AbortError') {
      return {
        success: false,
        error: 'The request timed out. Please check your network connection and try again.'
      };
    }

    // Network error or backend offline fallback
    console.error('[API Connection Error]:', err.message);
    return {
      success: false,
      error: 'Unable to reach the advisory server. Please check your connection or contact contact@greengateadvisory.com directly.'
    };
  }
}
