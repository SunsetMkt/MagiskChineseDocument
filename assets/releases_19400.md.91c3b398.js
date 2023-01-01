import{_ as e,c as t,o,d as s}from"./app.f353d06f.js";const g=JSON.parse('{"title":"2019.9.19 Magisk v19.4","description":"","frontmatter":{},"headers":[{"level":3,"title":"New System-as-root Implementation","slug":"new-system-as-root-implementation","link":"#new-system-as-root-implementation","children":[]},{"level":3,"title":"Android 10 Support","slug":"android-10-support","link":"#android-10-support","children":[]},{"level":3,"title":"Product Partition Support","slug":"product-partition-support","link":"#product-partition-support","children":[]},{"level":3,"title":"A-Only System-as-root","slug":"a-only-system-as-root","link":"#a-only-system-as-root","children":[]},{"level":3,"title":"Full Changelog: here","slug":"full-changelog-here","link":"#full-changelog-here","children":[]}],"relativePath":"releases/19400.md"}'),a={name:"releases/19400.md"},i=s('<h1 id="_2019-9-19-magisk-v19-4" tabindex="-1">2019.9.19 Magisk v19.4 <a class="header-anchor" href="#_2019-9-19-magisk-v19-4" aria-hidden="true">#</a></h1><p>This version is heavily tested and tons of bugs were squashed before release. However due to the massive changes, it is decided to release a public beta for people/root app developers to adjust/update before things hit public stable.</p><h3 id="new-system-as-root-implementation" tabindex="-1">New System-as-root Implementation <a class="header-anchor" href="#new-system-as-root-implementation" aria-hidden="true">#</a></h3><p>Magisk has supported system-as-root devices for a long time since the first Pixel came out. The goal is always to revert things back to the good old initramfs based root dir. However, this not only creates tons of issues on many devices, not easily hide-able with MagiskHide, but most importantly not even possible on Android 10. Starting with v19.4, Magisk will follow how Google has designed system-as-root: mounting system actually to <code>/</code> (root).</p><p>This implies several <strong>MASSIVE</strong> consequences for system-as-root devices:</p><ul><li><code>/system</code> is no longer a valid mount point. For existing root apps that remounts <code>/system</code> to <code>rw</code>, you will have to remount <code>/</code> instead of <code>/system</code></li><li>The root directory (<code>/</code>) is no longer <code>rootfs</code>, but actually system. Remounting <code>/</code> to <code>rw</code> and modify files means you are writing to the actual system partition, NOT volatile storage as it used to be in <code>rootfs</code>. This is not recommended as user is not necessary aware that you are tampering an actual partition, sometimes dangerous if dm-verity/AVB-verity is enforced, or sometimes outright impossible since many devices now ship with read-only system partitions (e.g. EROFS, EXT4 dedup)</li><li>Several custom kernel rely on Magisk&#39;s root directory overlay system (<code>overlay</code>) for modifying <code>/</code>. This is no longer compatible with the new implementation. A new overlay system (<code>overlay.d</code>) will replace the existing one as an alternative (details in <a href="https://topjohnwu.github.io/Magisk/guides.html#root-directory-overlay-system" target="_blank" rel="noreferrer">documentations</a>). To provide backwards compatibility, Magisk will switch to &quot;Compat Mode&quot; when <code>/overlay</code> is detected, which simply reverts to the old system-as-root setup. <strong>Compat Mode will not work on Android 10 and will cause bootloop</strong>. Although things will still work as it used to, <strong>please upgrade to <code>overlay.d</code> ASAP</strong>.</li></ul><h3 id="android-10-support" tabindex="-1">Android 10 Support <a class="header-anchor" href="#android-10-support" aria-hidden="true">#</a></h3><p>Other than A-only devices running Android 10, Android 10 is fully supported with MagiskHide fully functioning. Android 10&#39;s biggest challenge is the new &quot;2-Stage-Init&quot; system-as-root implementation, which is the sole reason why A-only is not support yet. Stay tuned for further updates as that is the next thing on the list.</p><p>(For those interested in &quot;2-Stage-Init&quot; and other details of system-as-root, check <a href="https://twitter.com/topjohnwu/status/1174392824625676288" target="_blank" rel="noreferrer">this Twitter thread I tweeted</a>)</p><h3 id="product-partition-support" tabindex="-1">Product Partition Support <a class="header-anchor" href="#product-partition-support" aria-hidden="true">#</a></h3><p>Magisk Module developers can now finally properly modify files in <code>/product</code>! This partition is now an essential part in Android 10, and many files are moved from system to product. Please check <a href="https://topjohnwu.github.io/Magisk/details.html#magic-mount" target="_blank" rel="noreferrer">documentations</a> for more details.</p><h3 id="a-only-system-as-root" tabindex="-1">A-Only System-as-root <a class="header-anchor" href="#a-only-system-as-root" aria-hidden="true">#</a></h3><p>A huge number of new devices have A-only system-as-root setups (Android 9.0). These unfortunate devices will have to install Magisk into the recovery partition. Please check the fully updated <a href="https://topjohnwu.github.io/Magisk/install.html" target="_blank" rel="noreferrer">Installation Guide</a> for more details.</p><h3 id="full-changelog-here" tabindex="-1">Full Changelog: <a href="https://topjohnwu.github.io/Magisk/changes.html" target="_blank" rel="noreferrer">here</a> <a class="header-anchor" href="#full-changelog-here" aria-hidden="true">#</a></h3>',14),r=[i];function n(l,d,h,c,p,u){return o(),t("div",null,r)}const y=e(a,[["render",n]]);export{g as __pageData,y as default};
