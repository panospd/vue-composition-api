import { mount, flushPromises } from "@vue/test-utils"
import Timeline from "../../src/components/Timeline.vue"
import { today, thisWeek, thisMonth } from "../../src/mocks"

jest.mock("axios", () => ({
  get: (url: string) => {
    return Promise.resolve({
      data: [today, thisWeek, thisMonth]
    })
  }
}))

function mountTimeline() {
  return mount({
    components: {Timeline},
    template: `
      <suspense>
        <template #default>
          <Timeline />
        </template>
        <template #fallback>
          Loading...
        </template>
      </suspense>
    `
  });
}

describe("Timeline", () => {
  it("renders today post default", async () => {
    const wrapper = mountTimeline()

    await flushPromises()

    expect(wrapper.html()).toContain(today.created.format("Do MMM"))
  })

  it("updates when the period is clicked", async () => {
    const wrapper = mountTimeline();

    await flushPromises()

    await wrapper.get('[data-test="This Week"]').trigger("click")

    expect(wrapper.html()).toContain(today.created.format("Do MMM"))
    expect(wrapper.html()).toContain(thisWeek.created.format("Do MMM"))
  })

  it("updates when the period is clicked", async () => {
    const wrapper = mountTimeline();

    await flushPromises()

    await wrapper.get('[data-test="This Month"]').trigger("click")

    expect(wrapper.html()).toContain(today.created.format("Do MMM"))
    expect(wrapper.html()).toContain(thisWeek.created.format("Do MMM"))
    expect(wrapper.html()).toContain(thisMonth.created.format("Do MMM"))
  })
})