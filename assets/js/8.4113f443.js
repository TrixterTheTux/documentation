(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{139:function(e,t,n){"use strict";n.r(t);var s=n(0),a=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"kernel-modifications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kernel-modifications","aria-hidden":"true"}},[e._v("#")]),e._v(" Kernel Modifications")]),e._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#update-kernel"}},[e._v("Update Kernel")])]),n("li",[n("a",{attrs:{href:"#confirm-kernel"}},[e._v("Confirm Kernel")])]),n("li",[n("a",{attrs:{href:"#set-default-boot"}},[e._v("Set Default Boot")])])])]),n("p"),e._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("In most cases, only users with a server provided by OVH will need to make any modifications to their kernel.")])]),e._v(" "),n("h2",{attrs:{id:"update-kernel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#update-kernel","aria-hidden":"true"}},[e._v("#")]),e._v(" Update Kernel")]),e._v(" "),n("p",[e._v("Install the new kernels using apt-get. In this case we are installing the latest version of the 4.4 kernel,\nbut feel free to browse using apt-cache search linux-image-extra to find all possible image versions you can\ninstall. You'll want to install the latest.")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" "),n("span",{attrs:{class:"token function"}},[e._v("install")]),e._v(" linux-image-4.4.0-72-generic linux-image-extra-4.4.0-72-generic\n")])])]),n("p",[e._v("After you've installed the new kernel you'll need to update the grub loader using the command below. After that, a\nserver reboot is in order.")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),n("span",{attrs:{class:"token function"}},[e._v("chmod")]),e._v(" -x /etc/grub.d/06_OVHkernel\n"),n("span",{attrs:{class:"token function"}},[e._v("sudo")]),e._v(" update-grub\n"),n("span",{attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),n("span",{attrs:{class:"token function"}},[e._v("reboot")]),e._v("\n")])])]),n("h2",{attrs:{id:"confirm-kernel"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#confirm-kernel","aria-hidden":"true"}},[e._v("#")]),e._v(" Confirm Kernel")]),e._v(" "),n("p",[e._v("Once you've rebooted, check that the latest kernel is installed using "),n("code",[e._v("uname -r")]),e._v(", it should output "),n("code",[e._v("4.4.0-45-generic")]),e._v("\n(in this case) or similar.")]),e._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),n("p",[e._v("If it still includes "),n("code",[e._v("-xxxx-grs-ipv6-64")]),e._v(" or similar, it didn't work and you should move on top the steps below.")])]),e._v(" "),n("h2",{attrs:{id:"set-default-boot"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#set-default-boot","aria-hidden":"true"}},[e._v("#")]),e._v(" Set Default Boot")]),e._v(" "),n("p",[e._v("Ok, so unfortunately the easiest way didn't work, but don't worry, we can still fix this. Firstly, lets run a quick\ncommand to list potential kernels, just look at the output and make sure you see your newly installed kernel listed.")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[e._v("grep")]),e._v(" "),n("span",{attrs:{class:"token string"}},[e._v('"menuentry \'"')]),e._v(" /boot/grub/grub.cfg\n")])])]),n("p",[e._v("After running that you should see output similar to the example below.")]),e._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("menuentry 'Ubuntu' --class ubuntu --class gnu-linux --class gnu --class os $menuentry_id_option 'gnulinux-simple-7b66c4ea-6e24-44aa-849d-9411c90b40b6' {\n    menuentry 'Ubuntu, with Linux 4.4.0-45-generic' --class ubuntu --class gnu-linux --class gnu --class os $menuentry_id_option 'gnulinux-4.4.0-45-generic-advanced-7b66c4ea-6e24-44aa-849d-9411c90b40b6' {\n    menuentry 'Ubuntu, with Linux 4.4.0-45-generic (recovery mode)' --class ubuntu --class gnu-linux --class gnu --class os $menuentry_id_option 'gnulinux-4.4.0-45-generic-recovery-7b66c4ea-6e24-44aa-849d-9411c90b40b6' {\n    menuentry 'Ubuntu, with Linux 4.4.0-31-generic' --class ubuntu --class gnu-linux --class gnu --class os $menuentry_id_option 'gnulinux-4.4.0-31-generic-advanced-7b66c4ea-6e24-44aa-849d-9411c90b40b6' {\n    menuentry 'Ubuntu, with Linux 4.4.0-31-generic (recovery mode)' --class ubuntu --class gnu-linux --class gnu --class os $menuentry_id_option 'gnulinux-4.4.0-31-generic-recovery-7b66c4ea-6e24-44aa-849d-9411c90b40b6' {\n    menuentry 'Ubuntu, with Linux 4.4.0-22-generic' --class ubuntu --class gnu-linux --class gnu --class os $menuentry_id_option 'gnulinux-4.4.0-22-generic-advanced-7b66c4ea-6e24-44aa-849d-9411c90b40b6' {\n    menuentry 'Ubuntu, with Linux 4.4.0-22-generic (recovery mode)' --class ubuntu --class gnu-linux --class gnu --class os $menuentry_id_option 'gnulinux-4.4.0-22-generic-recovery-7b66c4ea-6e24-44aa-849d-9411c90b40b6' {\n")])])]),n("p",[e._v("As you can see, we have "),n("code",[e._v("Ubuntu, with Linux 4.4.0-45-generic")]),e._v(" listed as the first indented option. To boot using this\nspecific kernel, we will need to modify our grub file.")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),n("span",{attrs:{class:"token function"}},[e._v("nano")]),e._v(" /etc/default/grub\n")])])]),n("p",[e._v("Find "),n("code",[e._v("GRUB_DEFAULT")]),e._v(", it is most likely set to "),n("code",[e._v("GRUB_DEFAULT=0")]),e._v(". We're going to modify it a bit to boot our new kernel.")]),e._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("GRUB_DEFAULT='Advanced options for Ubuntu>Ubuntu, with Linux 4.4.0-45-generic'\n")])])]),n("p",[e._v("The only part of the code above that you might need to change is the "),n("code",[e._v("4.4.0-45-generic")]),e._v(", which you can find based on\nthe kernel version you install. You might also notice that it matches the first indented entry from the grep menuentry\ncommand and also the version of the kernel that we installed above. Once you've done that, run the commands below to\nupdate grub and reboot, and you should be set.")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token function"}},[e._v("sudo")]),e._v(" update-grub\n"),n("span",{attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),n("span",{attrs:{class:"token function"}},[e._v("reboot")]),e._v("\n")])])])])}],!1,null,null,null);t.default=a.exports}}]);