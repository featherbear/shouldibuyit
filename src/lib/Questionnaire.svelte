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
    price,
  }

  let options: { [k in keyof typeof FauxChoices]?: any } = {
    itemName: "",
    income: {
      value: "",
      unit: "hr",
    },
  };

  onMount(() => {
    if (location.search) {
      options = {
        ...options,
        itemName: new URLSearchParams(location.search).get("n") ?? "",
      };
    }
  });
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

  function handleCalculateButton() {
    if (uiState.isCalculating) return;
    uiState.showOptions = false;
    uiState.isCalculating = true;

    setTimeout(() => {
      if (TopSecretFinancialAdvice()) {
        uiState.showResult = true;
        uiState.isCalculating = false;
      }
    }, 1000 + Math.random() * 2000);
  }

  function giveBadFinancialAdvice() {
    if (options.price && Math.random() < 0.05)
      return `It's only ${uiState.currencyUnit}${options.price}!!!`;
    if (options.price <= 6.0)
      return "It's only about the price of a cup of coffee";
    if (options.price <= 20)
      return "It's only the price of a meal or two, you can starve for a bit";
    if (options.sale) return "It's on sale, after all";
    if (options.want) return "You might not need it, but treat yourself.";

    let itemName = options.itemName?.trim();
    let choices = [
      "Well who else is going to get you a " + itemName,
      "Do it",
      itemName + ".",
    ];

    return choices[Math.floor(Math.random() * choices.length)];
  }

  onMount(() => {
    setInterval(() => {
      /**
       * Count time elapsed since an item name was added
       */
      if (!!options.itemName?.trim()) {
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
  import TopSecretFinancialAdvice from "./TopSecretFinancialAdvice";
  dayjs.extend(dayjs_duration);
  dayjs.extend(dayjs_relativeTime);
</script>

<div class="client">
  <div class="pb-8 mt-4">
    <h1>
      <span>Should I buy a</span>
      <input
        class="minimalUnderline"
        bind:value={options.itemName}
        type="text"
        placeholder="enter the item name"
        disabled={uiState.showResult || uiState.isCalculating}
      />
    </h1>
  </div>

  {#if options.itemName?.trim() && uiState.showOptions}
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
            bind:value={options.price}
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
          <select
            class="select select-bordered"
            bind:value={options.income.unit}
          >
            <option value="hr">per hour</option>
            <option value="yr">per year</option>
          </select>
        </div>
      </div>
    </Question>
  {/if}

  {#if options.itemName?.trim()}
    <div class="controlButtons">
      {#if uiState.isCalculating || uiState.showOptions !== false}
        <span>
          <button
            transition:fade
            class="btn btn-lg"
            class:loading={uiState.isCalculating}
            on:click={handleCalculateButton}
            >{#if !uiState.isCalculating}Should I buy it{/if}</button
          >
        </span>
      {/if}

      {#if uiState.showOptions === null}
        <span>
          <button
            class="btn btn-outline btn-sm md:btn-md lg:btn-lg"
            on:click={() => (uiState.showOptions = true)}>Refine AI</button
          >
        </span>
      {/if}
    </div>
  {/if}

  {#if uiState.showResult}
    <div transition:fly={{ delay: 800, y: 300 }} class="mt-8">
      <h1>Yes.</h1>

      <p>{giveBadFinancialAdvice()}</p>

      {#key uiState.elapsedTime}
        {#if uiState.elapsedTime && options.income.value}
          <p class="mt-4">
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
</div>

<style lang="scss">
.label {
  justify-content: start;
  input + span {
    margin-left: 10px;
  }
}

  .client {
    text-align: center;
  }
  .minimalUnderline {
    text-align: center;

    max-width: 100%;

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

  @media screen and (orientation: portrait) {
    .controlButtons > * {
      display: block;
      margin: 0 auto;
      margin-bottom: 1em;
    }
  }
</style>
