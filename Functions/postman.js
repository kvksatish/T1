const nodemailer = require("nodemailer");

function postman(fuuid, to) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "kvksatish98@gmail.com",
      pass: "xkvdtlmziwvokapy",
    },
  });
  const options = {
    from: "kvksatish98@gmail.com",
    to,
    subject: "testing nodemailer",
    html: `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG />
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!--<![endif]-->
    <title></title>

    <style type="text/css">
      @media only screen and (min-width: 520px) {
        .u-row {
          width: 500px !important;
        }
        .u-row .u-col {
          vertical-align: top;
        }
        .u-row .u-col-100 {
          width: 500px !important;
        }
      }

      @media (max-width: 520px) {
        .u-row-container {
          max-width: 100% !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
        }
        .u-row .u-col {
          min-width: 320px !important;
          max-width: 100% !important;
          display: block !important;
        }
        .u-row {
          width: 100% !important;
        }
        .u-col {
          width: 100% !important;
        }
        .u-col > div {
          margin: 0 auto;
        }
      }

      body {
        margin: 0;
        padding: 0;
      }

      table,
      tr,
      td {
        vertical-align: top;
        border-collapse: collapse;
      }

      p {
        margin: 0;
      }

      .ie-container table,
      .mso-container table {
        table-layout: fixed;
      }

      * {
        line-height: inherit;
      }

      a[x-apple-data-detectors="true"] {
        color: inherit !important;
        text-decoration: none !important;
      }

      table,
      td {
        color: #000000;
      }

      #u_body a {
        color: #0000ee;
        text-decoration: underline;
      }

      @media (max-width: 480px) {
        #u_content_text_2 .v-text-align {
          text-align: center !important;
        }
      }
    </style>
  </head>

  <body
    class="clean-body u_body"
    style="
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      background-color: #000000;
      color: #000000;
    ">
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table
      id="u_body"
      style="
        border-collapse: collapse;
        table-layout: fixed;
        border-spacing: 0;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        vertical-align: top;
        min-width: 320px;
        margin: 0 auto;
        background-color: #000000;
        width: 100%;
      "
      cellpadding="0"
      cellspacing="0">
      <tbody>
        <tr style="vertical-align: top">
          <td
            style="
              word-break: break-word;
              border-collapse: collapse !important;
              vertical-align: top;
            ">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #000000;"><![endif]-->

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent">
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 500px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                ">
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  ">
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 500px;
                      display: table-cell;
                      vertical-align: top;
                    ">
                    <div style="height: 100%; width: 100% !important">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                        ">
                        <!--<![endif]-->

                        <table
                          style="font-family: arial, helvetica, sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0">
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: arial, helvetica, sans-serif;
                                "
                                align="left">
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0">
                                  <tr>
                                    <td
                                      class="v-text-align"
                                      style="
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                      align="center">
                                      <img
                                        align="center"
                                        border="0"
                                        src="https://assets.unlayer.com/projects/164446/1685789783444-Machine%20Maze%20EBD-min.png"
                                        alt=""
                                        title=""
                                        style="
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          clear: both;
                                          display: inline-block !important;
                                          border: none;
                                          height: auto;
                                          float: none;
                                          width: 100%;
                                          max-width: 480px;
                                        "
                                        width="480" />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: arial, helvetica, sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0">
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: arial, helvetica, sans-serif;
                                "
                                align="left">
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0">
                                  <tr>
                                    <td
                                      class="v-text-align"
                                      style="
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                      align="center">
                                      <img
                                        align="center"
                                        border="0"
                                        src="https://assets.unlayer.com/projects/164446/1685789808679-Machine%20Maze%20EBD7-min.png"
                                        alt=""
                                        title=""
                                        style="
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          clear: both;
                                          display: inline-block !important;
                                          border: none;
                                          height: auto;
                                          float: none;
                                          width: 100%;
                                          max-width: 480px;
                                        "
                                        width="480" />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: arial, helvetica, sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0">
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: arial, helvetica, sans-serif;
                                "
                                align="left">
                                <table
                                  width="100%"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0">
                                  <tr>
                                    <td
                                      class="v-text-align"
                                      style="
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                      align="center">
                                      <img
                                        align="center"
                                        border="0"
                                        src="https://assets.unlayer.com/projects/164446/1685793427810-indiranaga4r.jpg"
                                        alt=""
                                        title=""
                                        style="
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          clear: both;
                                          display: inline-block !important;
                                          border: none;
                                          height: auto;
                                          float: none;
                                          width: 100%;
                                          max-width: 480px;
                                        "
                                        width="480" />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <div
              class="u-row-container"
              style="padding: 0px; background-color: transparent">
              <div
                class="u-row"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 500px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                ">
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                  ">
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

                  <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                  <div
                    class="u-col u-col-100"
                    style="
                      max-width: 320px;
                      min-width: 500px;
                      display: table-cell;
                      vertical-align: top;
                    ">
                    <div class="email-header">
               
            </div>
            <img src="https://guideyu-backend.vercel.app/mail_data/${fuuid}" alt="img not avaliable">
                    <div
                      style="
                        height: 100%;
                        width: 100% !important;
                        border-radius: 0px;
                        -webkit-border-radius: 0px;
                        -moz-border-radius: 0px;
                      ">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          box-sizing: border-box;
                          height: 100%;
                          padding: 0px;
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-right: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        ">
                        <!--<![endif]-->

                        <table
                          style="font-family: arial, helvetica, sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0">
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: arial, helvetica, sans-serif;
                                "
                                align="left">
                                <!--[if mso
                                  ]><style>
                                    .v-button {
                                      background: transparent !important;
                                    }
                                  </style><!
                                [endif]-->
                                <div class="v-text-align" align="center">
                                  <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://wa.link/9ybgc8" style="height:54px; v-text-anchor:middle; width:480px;" arcsize="7.5%"  stroke="f" fillcolor="#169179"><w:anchorlock/><center style="color:#ffffff;font-family:arial,helvetica,sans-serif;"><![endif]-->
                                  <a
                                    href="https://wa.link/9ybgc8"
                                    target="_blank"
                                    class="v-button"
                                    style="
                                      box-sizing: border-box;
                                      display: inline-block;
                                      font-family: arial, helvetica, sans-serif;
                                      text-decoration: none;
                                      -webkit-text-size-adjust: none;
                                      text-align: center;
                                      color: #ffffff;
                                      background-color: #169179;
                                      border-radius: 4px;
                                      -webkit-border-radius: 4px;
                                      -moz-border-radius: 4px;
                                      width: 100%;
                                      max-width: 100%;
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      word-wrap: break-word;
                                      mso-border-alt: none;
                                      font-size: 14px;
                                    ">
                                    <span
                                      style="
                                        display: block;
                                        padding: 10px 20px;
                                        line-height: 120%;
                                      "
                                      ><strong
                                        >TO SHARE YOUR REQUIREMENT OVER WHATSAPP
                                        , CLICK HERE.<br /></strong
                                    ></span>
                                  </a>
                                  <!--[if mso]></center></v:roundrect><![endif]-->
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          id="u_content_text_2"
                          style="font-family: arial, helvetica, sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0">
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: arial, helvetica, sans-serif;
                                "
                                align="left">
                                <div
                                  class="v-text-align"
                                  style="
                                    font-size: 14px;
                                    line-height: 140%;
                                    text-align: center;
                                    word-wrap: break-word;
                                  ">
                                  <p style="line-height: 140%">
                                    <strong
                                      ><span
                                        style="
                                          color: #ecf0f1;
                                          line-height: 19.6px;
                                        "
                                        >YOU CAN REPLY TO THIS MAIL BY SHARING
                                        BELOW DETAILS
                                      </span></strong
                                    ><br /><strong
                                      ><span
                                        style="
                                          color: #ecf0f1;
                                          line-height: 19.6px;
                                        "
                                        >Location -</span
                                      ></strong
                                    ><br /><strong
                                      ><span
                                        style="
                                          color: #ecf0f1;
                                          line-height: 19.6px;
                                        "
                                        >Workstation -&nbsp;</span
                                      ></strong
                                    ><br /><strong
                                      ><span
                                        style="
                                          color: #ecf0f1;
                                          line-height: 19.6px;
                                        "
                                        >Meeting Room -&nbsp;</span
                                      ></strong
                                    ><br /><strong
                                      ><span
                                        style="
                                          color: #ecf0f1;
                                          line-height: 19.6px;
                                        "
                                        >Cabin -</span
                                      ></strong
                                    ><br /><strong
                                      ><span
                                        style="
                                          color: #ecf0f1;
                                          line-height: 19.6px;
                                        "
                                        >Parking -</span
                                      ></strong
                                    ><br /><strong
                                      ><span
                                        style="
                                          color: #ecf0f1;
                                          line-height: 19.6px;
                                        "
                                        >Budget -</span
                                      ></strong
                                    >
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <table
                          style="font-family: arial, helvetica, sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0">
                          <tbody>
                            <tr>
                              <td
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 14px;
                                  font-family: arial, helvetica, sans-serif;
                                "
                                align="left">
                                <div align="center">
                                  <div style="display: table; max-width: 152px">
                                    <!--[if (mso)|(IE)]><table width="152" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:152px;"><tr><![endif]-->

                                    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 19px;" valign="top"><![endif]-->
                                    <table
                                      align="left"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                      width="32"
                                      height="32"
                                      style="
                                        width: 32px !important;
                                        height: 32px !important;
                                        display: inline-block;
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0;
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        vertical-align: top;
                                        margin-right: 19px;
                                      ">
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            align="left"
                                            valign="middle"
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                            ">
                                            <a
                                              href="https://www.instagram.com/guideyuofficespaceprovider/"
                                              title="Instagram"
                                              target="_blank">
                                              <img
                                                src="https://cdn.tools.unlayer.com/social/icons/circle/instagram.png"
                                                alt="Instagram"
                                                title="Instagram"
                                                width="32"
                                                style="
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                  clear: both;
                                                  display: block !important;
                                                  border: none;
                                                  height: auto;
                                                  float: none;
                                                  max-width: 32px !important;
                                                " />
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if (mso)|(IE)]></td><![endif]-->

                                    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 19px;" valign="top"><![endif]-->
                                    <table
                                      align="left"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                      width="32"
                                      height="32"
                                      style="
                                        width: 32px !important;
                                        height: 32px !important;
                                        display: inline-block;
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0;
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        vertical-align: top;
                                        margin-right: 19px;
                                      ">
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            align="left"
                                            valign="middle"
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                            ">
                                            <a
                                              href="https://www.linkedin.com/company/guideyu-office-space/"
                                              title="LinkedIn"
                                              target="_blank">
                                              <img
                                                src="https://cdn.tools.unlayer.com/social/icons/circle/linkedin.png"
                                                alt="LinkedIn"
                                                title="LinkedIn"
                                                width="32"
                                                style="
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                  clear: both;
                                                  display: block !important;
                                                  border: none;
                                                  height: auto;
                                                  float: none;
                                                  max-width: 32px !important;
                                                " />
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if (mso)|(IE)]></td><![endif]-->

                                    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
                                    <table
                                      align="left"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                      width="32"
                                      height="32"
                                      style="
                                        width: 32px !important;
                                        height: 32px !important;
                                        display: inline-block;
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0;
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        vertical-align: top;
                                        margin-right: 0px;
                                      ">
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            align="left"
                                            valign="middle"
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                            ">
                                            <a
                                              href="https://wa.link/9ybgc8"
                                              title="WhatsApp"
                                              target="_blank">
                                              <img
                                                src="https://cdn.tools.unlayer.com/social/icons/circle/whatsapp.png"
                                                alt="WhatsApp"
                                                title="WhatsApp"
                                                width="32"
                                                style="
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                  clear: both;
                                                  display: block !important;
                                                  border: none;
                                                  height: auto;
                                                  float: none;
                                                  max-width: 32px !important;
                                                " />
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <!--[if (mso)|(IE)]></td><![endif]-->

                                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td><![endif]-->
                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>

            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
      ${fuuid}
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
  </body>
</html>
`,
    // html: `<!DOCTYPE html>
    //   <html>
    //     <head>
    //       <meta charset="utf-8">
    //       <title>Beautiful Email Template</title>
    //       <style>
    //         /* Reset styles for email */
    //         body, body * {
    //           box-sizing: border-box;
    //           font-family: Arial, sans-serif;
    //           font-size: 16px;
    //           line-height: 1.5;
    //           margin: 0;
    //           padding: 0;
    //         }
    //         /* Set background color */
    //         body {
    //           background-color: #f7f7f7;
    //         }
    //         /* Wrapper for email content */
    //         .email-wrapper {
    //           background-color: #ffffff;
    //           border-radius: 4px;
    //           box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    //           margin: 50px auto;
    //           max-width: 600px;
    //           padding: 30px;
    //         }
    //         /* Header styles */
    //         .email-header {
    //           border-bottom: 1px solid #f0f0f0;
    //           margin-bottom: 30px;
    //           padding-bottom: 20px;
    //           text-align: center;
    //         }
    //         .email-header h1 {
    //           color: #333333;
    //           font-size: 24px;
    //           font-weight: bold;
    //           margin: 0;
    //         }
    //         /* Body styles */
    //         .email-body {
    //           margin-bottom: 30px;
    //         }
    //         .email-body p {
    //           margin-bottom: 20px;
    //         }
    //         /* Button styles */
    //         .email-button {
    //           background-color: #3498db;
    //           border-radius: 4px;
    //           color: #ffffff;
    //           display: inline-block;
    //           font-size: 16px;
    //           font-weight: bold;
    //           padding: 12px 24px;
    //           text-align: center;
    //           text-decoration: none;
    //         }
    //         .email-button:hover {
    //           background-color: #2980b9;
    //         }
    //       </style>
    //     </head>
    //     <body>
    //       <div class="email-wrapper">
    //         <div class="email-header">
    //           <h1>Welcome to our Beautiful Email Template ${fuuid}</h1>
    //         </div>
    //         <img src="https://guideyu-backend.vercel.app/mail_data/${fuuid}" alt="img not avaliable">
    //         <div class="email-body">
    //           <p>Hello there,</p>
    //           <p>Thanks for choosing our beautiful email template. We hope you find it easy to use and customize.</p>
    //           <p>If you have any questions or feedback, please don't hesitate to get in touch.</p>
    //         </div>
    //         <div class="email-footer">
    //           <p>Best regards,</p>
    //           <p>The Beautiful Email Template Team</p>
    //         </div>
    //         <div class="email-button-container">
    //           <a href="#" class="email-button">Get Started</a>
    //         </div>
    //       </div>
    //     </body>
    //   </html>
    //   `,
  };
  return new Promise(async (resolve, reject) => {
    try {
      const info = await transporter.sendMail(options);
      console.log(info);
      resolve(info);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
}

module.exports = postman;
