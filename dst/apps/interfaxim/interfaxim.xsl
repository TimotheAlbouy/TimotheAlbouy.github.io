<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:n="http://www.tei-c.org/ns/1.0"
  exclude-result-prefixes="xs" version="1.0"
>
  <xsl:output method="html" 
    encoding="UTF-8" 
    doctype-public="-//W3C//DTD HTML 4.01//EN"
    doctype-system="http://www.w3.org/TR/html4/strict.dtd" 
    indent="yes"
  />

  <xsl:template match="/" name="interfaxim">
    <xsl:apply-templates select="//n:TEI" />
  </xsl:template>

  <xsl:template match="n:TEI">
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="application-name" content="Interfaxim" />
        <meta name="author" content="Timothé &amp; Ségolène ALBOUY" />
        <meta name="description" content="Interactive facsimile" />
        <meta name="keywords" content="XSLT,XML,TEI" />
        <title><xsl:value-of select="//n:teiHeader/n:fileDesc/n:titleStmt/n:title" /></title>
        <style>
        body {
          font-family: Georgia, serif;
        }

        h1 {
          text-align: center;
        }

        .tabs {
          overflow: auto;
          border: 1px solid darkgrey;
          background-color: gainsboro;
          margin: 5px 0px;
        }

        .tabs button {
          background-color: inherit;
          padding: 0.5em;
          float: left;
          border: none;
          outline: none;
          cursor: pointer;
          transition: 0.3s;
          font-size: 1em;
        }

        .tabs button:hover {
          background-color: silver;
        }

        .tabs button.active {
          background-color: darkgrey;
        }

        .section-wrapper {
          position: relative;
        }

        div.zone {
          position: absolute;
        }

        div.zone &gt; span {
          position: relative;
          display: block;
          overflow-y: auto;
          visibility: hidden;
          background-color: white;
          font-family: Georgia, serif;
          padding: 0px 5px;
        }

        .zone:hover span {
          visibility: visible;
        }

        /* Original version (ov) */
        .ov {
          color: crimson;
        }

        /* Regularized version (rv) */
        .rv {
          color: mediumseagreen;
        }

        /* Not shown (ns) */
        .ns {
          display: none;
        }
        </style>
      </head>
      <body>
        <h1><xsl:value-of select="//n:teiHeader/n:fileDesc/n:titleStmt/n:title" /></h1>
        <div id="tabs-versions" class="tabs">
          <button id="rvBtn" onclick="changeVersion(event, 'rv')">Regularized version</button>
          <button id="ovBtn" onclick="changeVersion(event, 'ov')">Original version</button>
        </div>
        <div id="tabs-sections" class="tabs">
          <xsl:for-each select="//n:facsimile/n:surface">
            <button onclick="{concat('changeSection(event, ', position(), ')')}">
              Page <xsl:value-of select="position()" />
            </button>
          </xsl:for-each>
        </div>
        <xsl:for-each select="//n:facsimile/n:surface">
          <xsl:variable name="url" select="n:graphic/@url" />
          <div class="section-wrapper" data-section="{position()}">
            <img src="{$url}" />
            <div class="zone-list">
              <xsl:for-each select="n:zone">
                <xsl:variable name="left" select="@ulx" />
                <xsl:variable name="top" select="@uly" />
                <xsl:variable name="width" select="number(@lrx)-number(@ulx)" />
                <xsl:variable name="height" select="number(@lry)-number(@uly)" />
                <xsl:variable name="id" select="@xml:id" />
                <xsl:variable name="facs" select="concat('#', $id)" />
                <div class="zone" style="top: {$top}px; left: {$left}px; height: {$height}px; width: {$width}px;">
                  <span style="top: {$height}px;">
                    <xsl:apply-templates select="//n:seg[@facs=$facs]" />
                  </span>
                </div>
              </xsl:for-each>
            </div>
          </div>
        </xsl:for-each>
        <script>
        function changeVersion(evt, ver) {
          var ovnodes = document.getElementsByClassName("ov");
          var rvnodes = document.getElementsByClassName("rv");
          if (ver === "ov") {
            for (var i = 0; i &lt; ovnodes.length; i++) {
              var el = ovnodes[i];
              el.style.display = "inline";
            }
            for (var i = 0; i &lt; rvnodes.length; i++) {
              var el = rvnodes[i];
              el.style.display = "none";
            }
          } else if (ver === "rv") {
            for (var i = 0; i &lt; ovnodes.length; i++) {
              var el = ovnodes[i];
              el.style.display = "none";
            }
            for (var i = 0; i &lt; rvnodes.length; i++) {
              var el = rvnodes[i];
              el.style.display = "inline";
            }
          }
          var btnVersions = document.querySelectorAll("#tabs-versions button");
          for (var i = 0; i &lt; btnVersions.length; i++) {
            var el = btnVersions[i];
            el.className = el.className.replace(" active", "");
          }
          evt.currentTarget.className += " active";
        }

        function changeSection(evt, sec) {
          var sections = document.getElementsByClassName("section-wrapper");
          for (var i = 0; i &lt; sections.length; i++) {
            var el = sections[i];
            if (el.dataset.section == sec)
              el.style.display = "inline-block";
            else el.style.display = "none";
          }
          var btnSections = document.querySelectorAll("#tabs-sections button");
          for (var i = 0; i &lt; btnSections.length; i++) {
            var el = btnSections[i];
            el.className = el.className.replace(" active", "");
          }
          evt.currentTarget.className += " active";
        }

        document.getElementById("rvBtn").click();
        document.querySelector("#tabs-sections button:first-child").click();
        </script>
      </body>
    </html>
  </xsl:template>

  <!-- Original version -->

  <xsl:template match="abbr | n:abbr | orig | n:orig | sic | n:sic">
    <span class="ov"><xsl:apply-templates /></span>
  </xsl:template>

  <!-- Regularized version -->

  <xsl:template match="reg | n:reg | expan | n:expan | corr | n:corr">
    <span class="rv"><xsl:apply-templates /></span>
  </xsl:template>

  <!-- Not shown -->

  <xsl:template match="certainty | n:certainty">
    <span class="ns"><xsl:apply-templates /></span>
  </xsl:template>
</xsl:stylesheet>
