function extractField(body: string | undefined, label: string) {
    if (!body) return "N/A";
    const match = body.match(new RegExp(`${label}:\\s*(.*)`));
    return match?.[1] || "N/A";
}

function extractMultilineField(body: string | undefined, label: string) {
    if (!body) return "No details provided";
    const index = body.indexOf(label);
    return index !== -1 ? body.slice(index + label.length).trim() : "No details provided";
}

function buildHtml(message: any) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Lead Received</title>
</head>
<body style="margin:0; padding:0; background-color:#f5f5f5; font-family: Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5; padding: 20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 0 10px rgba(0,0,0,0.1);">

          <!-- Logo + Header -->
          <tr>
            <td style="background-color:#490077; padding:24px; text-align:center;">
              <img src="cid:logo" alt="Dexnive" width="120" style="display:block; margin:0 auto 12px;"/>
              <h1 style="color:#ffffff; font-size:24px; margin:0;">🚀 New Lead Received</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px; color:#333333;">
              <p style="font-size:14px; color:#555555; margin-bottom:24px;">
                You have received a new inquiry from your website.
              </p>

              <!-- Lead Info Table -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:12px 0; border-bottom:1px solid #e0e0e0;">
                    <strong>Name:</strong> <span style="color:#490077;">${message.name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0; border-bottom:1px solid #e0e0e0;">
                    <strong>Email:</strong> <span style="color:#490077;">${message.email}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0; border-bottom:1px solid #e0e0e0;">
                    <strong>Phone:</strong> <span style="color:#490077;">${message.phone}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0; border-bottom:1px solid #e0e0e0;">
                    <strong>Services:</strong> <span style="color:#490077;">${message.services}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0; border-bottom:1px solid #e0e0e0;">
                    <strong>Email:</strong> <span style="color:#490077;">${message.email}</span>
                  </td>
                </tr>
              </table>

              <!-- Project Details -->
              <div style="margin-top:24px;">
                <h3 style="color:#490077; font-size:16px; margin-bottom:8px;">Project Details</h3>
                <p style="background-color:#f0f0f0; padding:16px; border-radius:8px; font-size:14px; line-height:1.6; color:#333333;">
                  ${message.details}
                </p>
              </div>

              <!-- CTA Button -->
              <div style="margin-top:32px; text-align:center;">
                <a href="mailto:${message.email}" 
                  style="display:inline-block; padding:12px 24px; background-color:#490077; color:#ffffff; text-decoration:none; border-radius:999px; font-size:14px;">
                  Reply to Lead
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:16px; text-align:center; background-color:#f5f5f5; color:#777777; font-size:12px;">
              © ${new Date().getFullYear()} Dexnive • All rights reserved
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}


export { extractField, extractMultilineField, buildHtml };
