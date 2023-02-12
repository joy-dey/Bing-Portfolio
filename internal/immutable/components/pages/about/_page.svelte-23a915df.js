import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, b as insert_hydration, D as append_hydration, C as noop } from "../../../chunks/index-d9852f26.js";
function create_fragment(ctx) {
  let h1;
  let t0;
  let t1;
  let p;
  let t2;
  return {
    c() {
      h1 = element("h1");
      t0 = text("About Me");
      t1 = space();
      p = element("p");
      t2 = text("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium dicta quos delectus voluptatum harum nulla vel sapiente fuga. Nemo nobis amet quos culpa exercitationem totam cum dolor magni quo officia.");
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "About Me");
      h1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium dicta quos delectus voluptatum harum nulla vel sapiente fuga. Nemo nobis amet quos culpa exercitationem totam cum dolor magni quo officia.");
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p, anchor);
      append_hydration(p, t2);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(h1);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(p);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
