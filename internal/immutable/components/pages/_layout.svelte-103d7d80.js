import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, l as claim_element, m as children, h as detach, n as attr, b as insert_hydration, D as append_hydration, C as noop, E as destroy_each, q as text, a as space, r as claim_text, c as claim_space, F as create_slot, x as create_component, y as claim_component, z as mount_component, G as update_slot_base, H as get_all_dirty_from_scope, I as get_slot_changes, f as transition_in, t as transition_out, A as destroy_component } from "../../chunks/index-d9852f26.js";
import { b as base } from "../../chunks/paths-69ad0af0.js";
const navbar_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let li;
  let a;
  let t0_value = (
    /*link*/
    ctx[1].title + ""
  );
  let t0;
  let t1;
  return {
    c() {
      li = element("li");
      a = element("a");
      t0 = text(t0_value);
      t1 = space();
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", {});
      var li_nodes = children(li);
      a = claim_element(li_nodes, "A", { href: true, title: true });
      var a_nodes = children(a);
      t0 = claim_text(a_nodes, t0_value);
      a_nodes.forEach(detach);
      t1 = claim_space(li_nodes);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(
        a,
        "href",
        /*link*/
        ctx[1].href
      );
      attr(
        a,
        "title",
        /*link*/
        ctx[1].title
      );
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      append_hydration(li, a);
      append_hydration(a, t0);
      append_hydration(li, t1);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(li);
    }
  };
}
function create_fragment$1(ctx) {
  let nav;
  let ul;
  let each_value = (
    /*links*/
    ctx[0]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      nav = element("nav");
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      nav = claim_element(nodes, "NAV", { class: true });
      var nav_nodes = children(nav);
      ul = claim_element(nav_nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(ul_nodes);
      }
      ul_nodes.forEach(detach);
      nav_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(ul, "class", "svelte-15pyi4x");
      attr(nav, "class", "svelte-15pyi4x");
    },
    m(target, anchor) {
      insert_hydration(target, nav, anchor);
      append_hydration(nav, ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*links*/
      1) {
        each_value = /*links*/
        ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(nav);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance$1($$self) {
  const links = [
    { title: "Home", href: `${base}/` },
    { title: "About", href: `${base}/about` },
    {
      title: "Contact",
      href: `${base}/contact`
    }
  ];
  return [links];
}
class Navbar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
  }
}
const global = "";
function create_fragment(ctx) {
  let navbar;
  let t;
  let current;
  navbar = new Navbar({});
  const default_slot_template = (
    /*#slots*/
    ctx[1].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[0],
    null
  );
  return {
    c() {
      create_component(navbar.$$.fragment);
      t = space();
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      claim_component(navbar.$$.fragment, nodes);
      t = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      mount_component(navbar, target, anchor);
      insert_hydration(target, t, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[0],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[0]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[0],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(navbar.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(navbar.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      destroy_component(navbar, detaching);
      if (detaching)
        detach(t);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Layout as default
};
