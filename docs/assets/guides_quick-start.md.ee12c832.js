import{_ as s,c as n,o as a,d as e}from"./app.ccb77a3e.js";const m='{"title":"Quick Start","description":"","frontmatter":{},"headers":[{"level":3,"title":"Config File","slug":"config-file"},{"level":3,"title":"Publish Results","slug":"publish-results"}],"relativePath":"guides/quick-start.md","lastUpdated":1649596723000}',t={},p=e(`<h1 id="quick-start" tabindex="-1">Quick Start <a class="header-anchor" href="#quick-start" aria-hidden="true">#</a></h1><p>You can either use this library as a command line tool or import as an npm package. For either use cases, first we need to create a sample config file.</p><h3 id="config-file" tabindex="-1">Config File <a class="header-anchor" href="#config-file" aria-hidden="true">#</a></h3><p>It includes the details of <code>targets</code> and <code>results</code>.</p><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;reports&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;targets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;teams&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;teams-incoming-webhook-url&gt;&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;results&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;testng&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;path/to/testng-results.xml&quot;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="publish-results" tabindex="-1">Publish Results <a class="header-anchor" href="#publish-results" aria-hidden="true">#</a></h3><p>To publish the test results, use <code>npx</code> to install this library as a command line tool.</p><div class="language-sh line-numbers-mode"><pre><code>npx test-results-reporter publish -c path/to/config.json
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,8),o=[p];function r(l,c,u,i,d,b){return a(),n("div",null,o)}var h=s(t,[["render",r]]);export{m as __pageData,h as default};
