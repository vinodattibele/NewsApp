import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import testdata from './db.json';
import MainCard from '../src/components/MainCard.vue';

describe("MainCard.vue", () => {

    it("should renders free article as Main articles", () => {
      const cardDetails = testdata.articles[0];
      const title = "News app free article";
      const author = "James Waters";
      const content = "The Ruby floating production, storage and offloading vessel destined for the Reliance Industries-operated deep-water MJ gas condensate development offshore India has been involved in a collision with an accommodating barge, causing minor damage to the FPSO.\n\nIndian private sector giant Reliance confirmed the incident to Upstream on Friday and noted that “there was no personnel injury and there is no impact on the overall project schedule and commissioning” for the Krishna Godavari basin field develeopment.\n\n“Due to rough weather, the gangway from the accommodation barge Nor Goliath got lifted and made contact with the staircase on the FPSO causing minor damage to the stairs,” a Reliance spokesperson said. The spokesperson added that the Nor Goliath “pulled away along with the gangway”, and the gangway was inspected after being secured back on the barge.";
      const showLoader = false;
      const wrapper = mount(MainCard, {
        props: { cardDetails, showLoader },
      });
      expect(wrapper.text()).contains(title);
      expect(wrapper.text()).contains(author);
      expect(wrapper.text()).contains(content);
    });
    it("should renders paid article as Main articles", () => {
      const cardDetails = testdata.articles[1];
      const showLoader = false;
      const wrapper = mount(MainCard, {
        props: { cardDetails, showLoader },
      });
      const byClass = wrapper.find('.paid-article');
      expect(byClass.exists()).toBe(true);
      expect(byClass.text()).toBe("Read the entire article for free by clicking here");
    });
  });