import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import testdata from './db.json';
import ArticlesList from '../src/components/ArticlesList.vue';

describe("ArticlesList.vue", () => {
  const articles = testdata.articles;
  const readNews = vi.fn();
  const wrapper = mount(ArticlesList, {
    props: { articles, readNews },
  });

    it("should renders free article title", () => {
      const title = "News app free article";
      expect(wrapper.text()).contains(title);
    });
    it("should renders free article author", () => {
      const author = "James Waters";
      expect(wrapper.text()).contains(author);
    });
    it("should renders free article content", () => {
      const content = "The Ruby floating production, storage and";
      expect(wrapper.text()).contains(content);
    });
    it("should renders paid article title", () => {
      const title = "News app paid article";
      expect(wrapper.text()).contains(title);
    });
    it("should renders paid article author", () => {
      const author = "Eric Payne";
      expect(wrapper.text()).contains(author);
    });
    it("should renders paid article content", () => {
      const content = "Swedish police said on Thursday that a crime ";
      expect(wrapper.text()).contains(content);
    });
  });