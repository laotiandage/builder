import {
  _,
  j as k,
  D as C,
  r,
  o as c,
  b as u,
  a as v,
  n as h,
  g as w,
  k as t,
  w as l,
  d as x,
  m as n,
  t as B,
  c as y,
  e as p,
  F,
} from "./index.e448aea1.js";
import { F as U } from "./FileUploader.8b3e0f39.js";
import "./fileUploadHandler.147d8a7e.js";
const I = {
    name: "InsertImage",
    props: ["editor"],
    expose: ["openDialog"],
    data() {
      return { addVideoDialog: { url: "", file: null, show: !1 } };
    },
    components: { Button: k, Dialog: C, FileUploader: U },
    methods: {
      openDialog() {
        this.addVideoDialog.show = !0;
      },
      onVideoSelect(i) {
        let o = i.target.files[0];
        !o || (this.addVideoDialog.file = o);
      },
      addVideo(i) {
        this.editor
          .chain()
          .focus()
          .insertContent(`<video src="${i}"></video>`)
          .run(),
          this.reset();
      },
      reset() {
        this.addVideoDialog = this.$options.data().addVideoDialog;
      },
    },
  },
  N = { class: "flex items-center space-x-2" },
  S = ["src"];
function A(i, o, b, L, e, a) {
  const s = r("Button"),
    g = r("FileUploader"),
    V = r("Dialog");
  return (
    c(),
    u(
      F,
      null,
      [
        v(i.$slots, "default", h(w({ onClick: a.openDialog }))),
        t(
          V,
          {
            options: { title: "Add Video" },
            modelValue: e.addVideoDialog.show,
            "onUpdate:modelValue":
              o[2] || (o[2] = (d) => (e.addVideoDialog.show = d)),
            onAfterLeave: a.reset,
          },
          {
            "body-content": l(() => [
              t(
                g,
                {
                  "file-types": "video/*",
                  onSuccess:
                    o[0] || (o[0] = (d) => (e.addVideoDialog.url = d.file_url)),
                },
                {
                  default: l(
                    ({
                      file: d,
                      progress: f,
                      uploading: m,
                      openFileSelector: D,
                    }) => [
                      x("div", N, [
                        t(
                          s,
                          { onClick: D },
                          {
                            default: l(() => [
                              n(
                                B(
                                  m
                                    ? `Uploading ${f}%`
                                    : e.addVideoDialog.url
                                    ? "Change Video"
                                    : "Upload Video"
                                ),
                                1
                              ),
                            ]),
                            _: 2,
                          },
                          1032,
                          ["onClick"]
                        ),
                        e.addVideoDialog.url
                          ? (c(),
                            y(
                              s,
                              {
                                key: 0,
                                onClick: () => {
                                  (e.addVideoDialog.url = null),
                                    (e.addVideoDialog.file = null);
                                },
                              },
                              { default: l(() => [n(" Remove ")]), _: 2 },
                              1032,
                              ["onClick"]
                            ))
                          : p("", !0),
                      ]),
                    ]
                  ),
                  _: 1,
                }
              ),
              e.addVideoDialog.url
                ? (c(),
                  u(
                    "video",
                    {
                      key: 0,
                      src: e.addVideoDialog.url,
                      class: "mt-2 w-full rounded-lg",
                      type: "video/mp4",
                      controls: "",
                    },
                    null,
                    8,
                    S
                  ))
                : p("", !0),
            ]),
            actions: l(() => [
              t(
                s,
                {
                  variant: "solid",
                  onClick:
                    o[1] || (o[1] = (d) => a.addVideo(e.addVideoDialog.url)),
                },
                { default: l(() => [n(" Insert Video ")]), _: 1 }
              ),
              t(
                s,
                { onClick: a.reset },
                { default: l(() => [n("Cancel")]), _: 1 },
                8,
                ["onClick"]
              ),
            ]),
            _: 1,
          },
          8,
          ["modelValue", "onAfterLeave"]
        ),
      ],
      64
    )
  );
}
const z = _(I, [["render", A]]);
export { z as default };
//# sourceMappingURL=InsertVideo.89dc02ad.js.map