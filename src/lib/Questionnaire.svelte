<script lang="ts">
  import { onMount } from "svelte";

  /**
   * We live in a society
   */
  enum FauxChoices {
    itemName,
    income,
    sale,
    need,
    want,
  }

  let options: { [k in keyof typeof FauxChoices]?: any } = {
    itemName: "aa",
    income: {
      value: "",
      unit: "hr",
    },
  };

  import { fade, fly } from "svelte/transition";

  let uiState = {
    /**
     * Is the loading spinner running
     */
    isCalculating: false,
    /**
     * Show options?
     * Hidden after the calculate button is pressed
     */
    showOptions: null,
    /**
     * Seconds passed since the item named was entered in
     */
    elapsedTime: 0,
    /**
     * Unit of currency to display
     */
    currencyUnit: "$",
    /**
     * Show the result?
     */
    showResult: false,
  };

  function getMoneyWasted() {
    const { value, unit } = options.income;
    const elapsedTime = uiState.elapsedTime;
    if (!uiState.elapsedTime || !value) return 0;

    const secondsPerHour =
      60 /* seconds per minute */ * /* minutes per hour */ 60;

    const workHoursPerYear = 38 /* hours a week */ * /* weeks in a year */ 52;
    const workSecondsPerYear = secondsPerHour * workHoursPerYear;

    let moneyLost: number;

    switch (unit) {
      case "hr":
        moneyLost = (elapsedTime / secondsPerHour) * value;
      case "yr":
        moneyLost = (elapsedTime / workSecondsPerYear) * value;
    }

    return moneyLost;
  }

  function shouldIBuyIt() {
    if (uiState.isCalculating) return;
    uiState.showOptions = false;
    uiState.isCalculating = true;

    // TODO: Add actual financial advice here.
    // lol

    setTimeout(() => {
      uiState.showResult = true;
      uiState.isCalculating = false;
    }, 1000);
  }

  onMount(() => {
    setInterval(() => {
      /**
       * Count time elapsed since an item name was added
       */
      if (!!options.itemName) {
        uiState.elapsedTime++;
      } else {
        uiState.elapsedTime = 0;
      }
    }, 1000);
  });

  import dayjs from "dayjs";
  import dayjs_duration from "dayjs/plugin/duration";
  import dayjs_relativeTime from "dayjs/plugin/relativeTime";
  import Question from "./Question.svelte";
  dayjs.extend(dayjs_duration);
  dayjs.extend(dayjs_relativeTime);
</script>

<div class="pb-8">
  <h1>
    <span>Should I buy a</span>
    <input
      class="minimalUnderline"
      bind:value={options.itemName}
      type="text"
      placeholder="Enter the item here"
      disabled={uiState.showResult || uiState.isCalculating}
    />
  </h1>
</div>

{#if options.itemName && uiState.showOptions}
  <Question>
    <div class="form-control" transition:fade>
      <label class="label">
        <span class="label-text">Do you need it?</span>
      </label>
      <label class="label cursor-pointer">
        <input
          type="radio"
          class="radio checked:bg-green-500"
          bind:group={options.need}
          value={true}
        />
        <span class="label-text">Yes</span>
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer">
        <input
          type="radio"
          class="radio checked:bg-red-500"
          bind:group={options.need}
          value={false}
        />
        <span class="label-text">No</span>
      </label>
    </div>
  </Question>

  {#if options.need === false}
    <Question>
      <div class="form-control" transition:fade>
        <label class="label">
          <span class="label-text">But do you want it?</span>
        </label>
        <label class="label cursor-pointer">
          <input
            type="radio"
            class="radio checked:bg-green-500"
            bind:group={options.want}
            value={true}
          />
          <span class="label-text">Yes</span>
        </label>
      </div>
    </Question>
  {/if}

  <Question>
    <div class="form-control" transition:fade>
      <label class="label">
        <span class="label-text">How much is it?</span>
      </label>
      <div class="input-group">
        <select
          class="select select-bordered"
          bind:value={uiState.currencyUnit}
        >
          {#each ["$", "€", "£", "¥"] as t}
            <option>{t}</option>
          {/each}
        </select>
        <input
          type="number"
          min="0"
          placeholder="Price"
          class="input input-bordered w-full max-w-xs"
        />
      </div>
    </div>
  </Question>

  <Question>
    <div class="form-control" transition:fade>
      <label class="label">
        <span class="label-text">Is it on sale?</span>
      </label>
      <label class="label cursor-pointer">
        <input
          type="radio"
          class="radio checked:bg-green-500"
          bind:group={options.sale}
          value={true}
        />
        <span class="label-text">Yes</span>
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer">
        <input
          type="radio"
          class="radio checked:bg-red-500"
          bind:group={options.sale}
          value={false}
        />
        <span class="label-text">No</span>
      </label>
    </div>
  </Question>

  <Question>
    <div class="form-control" transition:fade>
      <label class="label">
        <span class="label-text">What's your income?</span>
      </label>
      <div class="input-group">
        <select
          class="select select-bordered"
          bind:value={uiState.currencyUnit}
        >
          {#each ["$", "€", "£", "¥"] as t}
            <option>{t}</option>
          {/each}
        </select>
        <input
          type="number"
          min="0"
          placeholder="Income"
          class="input input-bordered w-full max-w-xs"
          bind:value={options.income.value}
        />
        <select class="select select-bordered" bind:value={options.income.unit}>
          <option value="hr">per hour</option>
          <option value="yr">per year</option>
        </select>
      </div>
    </div>
  </Question>
{/if}

{#if options.itemName}
  {#if uiState.isCalculating || uiState.showOptions !== false}
    <button
      transition:fade
      class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
      class:loading={uiState.isCalculating}
      on:click={shouldIBuyIt}
      >{#if !uiState.isCalculating}Should I buy it{/if}</button
    >
  {/if}

  {#if uiState.showOptions === null}
    <button
      class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
      on:click={() => (uiState.showOptions = true)}>Refine AI</button
    >
  {/if}
{/if}

{#if uiState.showResult}
  <div transition:fly={{ delay: 800, y: 300 }} class="mt-8">
    <h1>Yes</h1>

    {#key uiState.elapsedTime}
      {#if uiState.elapsedTime && options.income.value}
        <p>
          This tool just took {dayjs
            .duration(uiState.elapsedTime, "s")
            .humanize()} of your life away.
        </p>
        <p>
          That's roughly {uiState.currencyUnit}{getMoneyWasted()} you could have
          earned to put towards this purchase
        </p>
      {/if}
    {/key}
  </div>
{/if}

<style lang="scss">
  .minimalUnderline {
    text-align: center;

    border: none;
    outline: 0;

    transition: opacity 0.4s;
    &:not(:focus) {
      border-bottom: 2px dotted black;
      opacity: 80%;
    }
    &:focus {
      border-bottom: 2px solid grey;
    }
  }
</style>
