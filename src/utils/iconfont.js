!(function (t) {
  var e,
    n,
    i,
    l,
    a,
    o =
      '<svg><symbol id="icon-smilesmile" viewBox="0 0 1024 1024"><path d="M512 512m-511.982387 0a511.982387 511.982387 0 1 0 1023.964774 0 511.982387 511.982387 0 1 0-1023.964774 0Z" fill="#F9C228" ></path><path d="M917.619539 199.639491C761.536154-3.082215 483.485105-56.554248 265.951152 62.930031a531.620502 531.620502 0 0 0-166.598142 387.161472c0 294.430822 238.686756 533.099966 533.099966 533.099966a535.424837 535.424837 0 0 0 101.219951-9.598899 514.289646 514.289646 0 0 0 90.705195-55.973031C1048.393533 745.138768 1090.223598 423.672515 917.619539 199.639491z" fill="#FCDC22" ></path><path d="M972.042656 550.272308c-111.329618 114.904988-252.600757 198.670795-415.482628 260.033299 0 0 55.867355 156.664603 207.829377 101.53698 250.628139-90.846096 207.653251-361.570279 207.653251-361.570279z" fill="#FC9B88" ></path><path d="M522.690884 570.08655a80.119986 64.145304 90 1 0 128.290609 0 80.119986 64.145304 90 1 0-128.290609 0Z" fill="#282828" ></path><path d="M860.519298 429.449467a80.119986 54.881046 90 1 0 109.762092 0 80.119986 54.881046 90 1 0-109.762092 0Z" fill="#282828" ></path><path d="M953.813553 724.584795a261.319023 261.319023 0 0 0-116.014585-59.988717C754.121225 723.616099 659.699759 771.434469 556.560028 810.305607c0 0 55.867355 156.664603 207.829377 101.53698 110.959752-40.209701 164.361335-115.64472 189.424148-187.257792z" fill="#EA0F1A" ></path></symbol><symbol id="icon-smilebiaoqingbao" viewBox="0 0 1024 1024"><path d="M256 750.933333a458.752 458.752 0 0 0 30.037333 162.474667 460.117333 460.117333 0 0 0 656.725334-563.882667A460.458667 460.458667 0 0 0 256 750.933333z" fill="#3FE699" ></path><path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m0-921.6a409.6 409.6 0 1 0 409.6 409.6A409.6 409.6 0 0 0 512 102.4z" fill="#2D515E" ></path><path d="M307.2 341.333333m51.2 0l0 0q51.2 0 51.2 51.2l0 102.4q0 51.2-51.2 51.2l0 0q-51.2 0-51.2-51.2l0-102.4q0-51.2 51.2-51.2Z" fill="#2D515E" ></path><path d="M614.4 341.333333m51.2 0l0 0q51.2 0 51.2 51.2l0 102.4q0 51.2-51.2 51.2l0 0q-51.2 0-51.2-51.2l0-102.4q0-51.2 51.2-51.2Z" fill="#2D515E" ></path></symbol></svg>',
    d = (d = document.getElementsByTagName("script"))[
      d.length - 1
    ].getAttribute("data-injectcss"),
    c = function (t, e) {
      e.parentNode.insertBefore(t, e);
    };
  if (d && !t.__iconfont__svg__cssinject__) {
    t.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (t) {
      console && console.log(t);
    }
  }
  function s() {
    a || ((a = !0), i());
  }
  function h() {
    try {
      l.documentElement.doScroll("left");
    } catch (t) {
      return void setTimeout(h, 50);
    }
    s();
  }
  (e = function () {
    var t,
      e = document.createElement("div");
    (e.innerHTML = o),
      (o = null),
      (e = e.getElementsByTagName("svg")[0]) &&
        (e.setAttribute("aria-hidden", "true"),
        (e.style.position = "absolute"),
        (e.style.width = 0),
        (e.style.height = 0),
        (e.style.overflow = "hidden"),
        (e = e),
        (t = document.body).firstChild ? c(e, t.firstChild) : t.appendChild(e));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(e, 0)
        : ((n = function () {
            document.removeEventListener("DOMContentLoaded", n, !1), e();
          }),
          document.addEventListener("DOMContentLoaded", n, !1))
      : document.attachEvent &&
        ((i = e),
        (l = t.document),
        (a = !1),
        h(),
        (l.onreadystatechange = function () {
          "complete" == l.readyState && ((l.onreadystatechange = null), s());
        }));
})(window);
