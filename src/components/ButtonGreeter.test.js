import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import Greeter from "./ButtonGreeter.vue";

describe("Greeter Component", () => {
    it("renders the correct button text", () => {
        const wrapper = mount(Greeter, {
            props: { buttonText: "Test Button" }
        });

        expect(wrapper.text()).toContain("Test Button");
    });

    it("prints message on click", async () => {
        console.log = vi.fn(); // Mock console.log
        window.alert = vi.fn(); // Mock window.alert

        const wrapper = mount(Greeter, {
            props: { message: "Hello Test!" }
        });

        await wrapper.find("button").trigger("click");

        expect(console.log).toHaveBeenCalledWith("Hello Test!");
    });
});
