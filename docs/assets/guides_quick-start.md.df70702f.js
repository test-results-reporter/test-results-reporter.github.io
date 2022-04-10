import{_ as s,c as n,o as a,d as t}from"./app.84a1d104.js";const _='{"title":"Quick Start","description":"","frontmatter":{},"headers":[{"level":3,"title":"Config File","slug":"config-file"},{"level":3,"title":"Publish Results","slug":"publish-results"}],"relativePath":"guides/quick-start.md","lastUpdated":1649593558000}',e={},o=t(`<h1 id="quick-start" tabindex="-1">Quick Start <a class="header-anchor" href="#quick-start" aria-hidden="true">#</a></h1><p>You can either use this library as a command line tool or import as an npm package. For either use cases, first we need to create a sample config file.</p><h3 id="config-file" tabindex="-1">Config File <a class="header-anchor" href="#config-file" aria-hidden="true">#</a></h3><p>It includes the details of <code>targets</code> and <code>results</code>.</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
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
</code></pre></div><h3 id="publish-results" tabindex="-1">Publish Results <a class="header-anchor" href="#publish-results" aria-hidden="true">#</a></h3><p>To publish the test results, use <code>npx</code> to install this library as a command line tool.</p><div class="language-sh"><pre><code>npx test-results-reporter publish -c path/to/config.json
</code></pre></div>`,8),p=[o];function c(r,u,l,i,d,k){return a(),n("div",null,p)}var g=s(e,[["render",c]]);export{_ as __pageData,g as default};
