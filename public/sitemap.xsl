<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <title>XML Sitemap | Arc Engineering Solutions Ltd</title>
                <style type="text/css">
                    body {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        font-size: 14px;
                        color: #334155;
                        background-color: #f8fafc;
                        margin: 0;
                        padding: 20px;
                    }
                    .container {
                        max-width: 1000px;
                        margin: 0 auto;
                        background: #ffffff;
                        padding: 40px;
                        border-radius: 12px;
                        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                    }
                    .header {
                        border-bottom: 2px solid #0056b3;
                        margin-bottom: 30px;
                        padding-bottom: 20px;
                    }
                    h1 {
                        color: #0f172a;
                        margin: 0 0 10px 0;
                        font-size: 28px;
                    }
                    p {
                        color: #64748b;
                        line-height: 1.6;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                    }
                    th {
                        text-align: left;
                        background-color: #f1f5f9;
                        color: #475569;
                        font-weight: 600;
                        padding: 15px;
                        border-bottom: 2px solid #e2e8f0;
                        text-transform: uppercase;
                        font-size: 12px;
                        letter-spacing: 0.05em;
                    }
                    td {
                        padding: 15px;
                        border-bottom: 1px solid #f1f5f9;
                    }
                    tr:hover td {
                        background-color: #fdfdfd;
                    }
                    .url-link {
                        color: #0056b3;
                        text-decoration: none;
                        font-weight: 500;
                    }
                    .url-link:hover {
                        text-decoration: underline;
                    }
                    .priority-badge {
                        display: inline-block;
                        padding: 4px 10px;
                        border-radius: 20px;
                        background: #e0f2fe;
                        color: #0369a1;
                        font-weight: bold;
                        font-size: 12px;
                    }
                    .footer {
                        margin-top: 40px;
                        font-size: 12px;
                        color: #94a3b8;
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Arc Engineering Solutions Ltd</h1>
                        <p><strong>XML Sitemap Index</strong><br/>
                        Automated site index for search engine crawlers (Google, Bing, Yandex). 
                        Last updated: <xsl:value-of select="sitemap:urlset/sitemap:url[1]/sitemap:lastmod"/></p>
                    </div>
                    
                    <table>
                        <thead>
                            <tr>
                                <th>URL Location</th>
                                <th>Priority</th>
                                <th>Frequency</th>
                                <th>Last Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            <xsl:for-each select="sitemap:urlset/sitemap:url">
                                <tr>
                                    <td>
                                        <a class="url-link" href="{sitemap:loc}">
                                            <xsl:value-of select="sitemap:loc"/>
                                        </a>
                                    </td>
                                    <td>
                                        <span class="priority-badge">
                                            <xsl:value-of select="sitemap:priority"/>
                                        </span>
                                    </td>
                                    <td><xsl:value-of select="sitemap:changefreq"/></td>
                                    <td><xsl:value-of select="sitemap:lastmod"/></td>
                                </tr>
                            </xsl:for-each>
                        </tbody>
                    </table>
                    
                    <div class="footer">
                        © 2026 Arc Engineering Solutions Ltd | Providing Global Modular Infrastructure.
                    </div>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>