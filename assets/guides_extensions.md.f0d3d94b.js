import{_ as s,o as n,c as a,a as l}from"./app.0283d885.js";const C=JSON.parse('{"title":"Extensions","description":"","frontmatter":{},"headers":[{"level":2,"title":"Supports","slug":"supports","link":"#supports","children":[]},{"level":2,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":2,"title":"Config","slug":"config","link":"#config","children":[]}],"relativePath":"guides/extensions.md","lastUpdated":1667033965000}'),p={name:"guides/extensions.md"},o=l(`<h1 id="extensions" tabindex="-1">Extensions <a class="header-anchor" href="#extensions" aria-hidden="true">#</a></h1><p>Extensions add additional behavior to the targets.</p><h2 id="supports" tabindex="-1">Supports <a class="header-anchor" href="#supports" aria-hidden="true">#</a></h2><p>Extension types.</p><p>✅ <a href="/extensions/hyperlinks.html">Hyperlinks</a></p><p>✅ <a href="/extensions/mentions.html">Mentions</a></p><p>✅ <a href="/extensions/metadata.html">Metadata</a></p><p>✅ <a href="/extensions/report-portal-analysis.html">ReportPortal Analysis</a></p><p>✅ <a href="/extensions/report-portal-history.html">ReportPortal History</a></p><p>✅ <a href="/extensions/quick-chart-test-summary.html">QuickChart Test Summary</a></p><p>✅ <a href="/extensions/percy-analysis.html">Percy Analysis</a></p><p>✅ <a href="/extensions/custom.html">Custom</a></p><h2 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-hidden="true">#</a></h2><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hyperlinks</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">condition</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fail</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">inputs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">links</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Build Logs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">url</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;build-logs-url&gt;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li><code>name</code> (<strong>string</strong>) - name of the extension. <blockquote><p><code>hyperlinks</code>, <code>mentions</code>, <code>report-portal-analysis</code>, <code>report-portal-history</code>, <code>quick-chart-test-summary</code>, <code>percy-analysis</code>, <code>custom</code></p></blockquote></li><li><code>condition?</code> (<strong><a href="/guides/conditions.html">condition</a></strong>) - condition of execute the extension.</li><li><code>hook?</code> (<strong>string</strong>) - workflow hook to run. <blockquote><p><code>start</code>, <code>post-main</code>, <code>end</code></p></blockquote></li><li><code>inputs?</code> (<strong>object</strong>) - custom inputs to run the extension. <ul><li><code>title?</code> (<strong>string</strong>) - title of the extension to be displayed. (<em>applicable for most extension</em>)</li><li><code>title_link?</code> (<strong>string</strong>) - attaches a clickable link to the title. (<em>applicable for most extension</em>)</li></ul></li></ul><h2 id="config" tabindex="-1">Config <a class="header-anchor" href="#config" aria-hidden="true">#</a></h2><p>Sample partial config file.</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">targets</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">slack</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">inputs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">url</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;incoming-webhook-url&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">publish</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test-summary</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">extensions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">report-portal-analysis</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">inputs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;report-portal-base-url&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">api_key</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;api-key&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">project</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;project-id&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">launch_id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;launch-id&gt;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">results</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">testng</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">files</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">path/to/testng-results.xml</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,18),e=[o];function t(r,c,D,i,F,y){return n(),a("div",null,e)}const A=s(p,[["render",t]]);export{C as __pageData,A as default};
