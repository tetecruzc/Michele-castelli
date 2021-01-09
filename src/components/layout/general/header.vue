<template>
  <header :elevation="7">
    <img
      alt="Michele Castelli Logo"
      class="logo"
      src="@/assets/logo.png"
      transition="scale-transition"
      @click="goToUrl('Home')"
    />
    <ul v-bind:class="{ showMenu: checked }">
      <div class="link" v-for="(link, i) in headerLinks" :key="i">
        <a @click="goToUrl(link.url, link.filter)" class="link__effect">{{
          $t("header." + link.title)
        }}</a>
        <div class="link__submenu" v-if="link.submenu" :elevation="7">
          <ul>
            <li v-for="(subLink, k) in link.submenu" :key="k">
              <a @click="goToUrl(subLink.url, subLink.filter)">{{
                $t("header." + subLink.title)
              }}</a>
            </li>
          </ul>
        </div>
      </div>
      <Selector v-if="checked === true"></Selector>
    </ul>
    <Selector v-if="checked === false"></Selector>
    <div class="hamburger-menu">
      <SvgIcon
        :name="checked === false ? 'icon-menu' : 'icon-x'"
        styles="hamburger-menu__icon"
      />
      <input v-model="checked" type="checkbox" />
    </div>
  </header>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import Selector from "@/components/Selector.vue";
import SvgIcon from "@/components/general/SvgIcon.vue";
import { headerLinks } from "@/collections/headerLinks";

@Component({
  components: {
    Selector,
    SvgIcon,
  },
})
export default class Header extends Vue {
  checked: boolean = false;
  headerLinks: Record<string, any> = [];
  created() {
    this.headerLinks = headerLinks;
  }
  goToUrl(url: string, filter: string) {
    this.$router
      .push({
        name: url,
        params: { filter: filter },
      })
      .catch(() => {});
  }
}
</script>
