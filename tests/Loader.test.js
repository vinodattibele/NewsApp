import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Loader from '../src/components/Loader.vue';

describe("Loader.vue", () => {

    it("should renders spinner", () => {
        const showLoader = true;
        const wrapper = mount(Loader, {
          props: { showLoader },
        });
        const byId = wrapper.find('#spinner');
        expect(byId.exists()).toBe(true);
    });
    it("should hide spinner", () => {
        const showLoader = false;
        const wrapper = mount(Loader, {
          props: { showLoader },
        });
        const byId = wrapper.find('#spinner');
        expect(byId.exists()).toBe(false);
    });
});