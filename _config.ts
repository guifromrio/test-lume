import lume from "lume/mod.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import date from "lume/plugins/date.ts";
import esbuild from "lume/plugins/esbuild.ts";
import eta from "lume/plugins/eta.ts";
import inline from "lume/plugins/inline.ts";
import liquid from "lume/plugins/liquid.ts";
import mdx from "lume/plugins/mdx.ts";
import metas from "lume/plugins/metas.ts";
import minify_html from "lume/plugins/minify_html.ts";
import on_demand from "lume/plugins/on_demand.ts";
import picture from "lume/plugins/picture.ts";
import imagick from "lume/plugins/imagick.ts";
import slugify_urls from "lume/plugins/slugify_urls.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume();

site.use(jsx_preact());
site.use(date());
site.use(esbuild());
site.use(eta());
site.use(inline());
site.use(liquid());
site.use(mdx());
site.use(metas());
site.use(minify_html());
site.use(on_demand());
site.use(picture());
site.use(picture());
site.use(imagick());
site.use(slugify_urls());
site.use(tailwindcss());
site.use(tailwindcss());
site.use(postcss());

export default site;
