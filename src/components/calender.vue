<template>
  <div>
    <div class="container mx-auto mt-10">
      <div class="bg-green-300 w-56 px-4 shadow-lg rounded flex flex-col items-center">
        <div class="w-full py-2 flex justify-around items-center">
          <button class="focus:outline-none">
            <svg class="w-6 fill-current text-black" viewBox="0 0 21 21">
              <g transform="translate(-253 -244)">
                <rect style="fill:none;" width="21" height="21" transform="translate(253 244)" />
                <g transform="translate(363.979 261) rotate(180)">
                  <path
                    d="M103.732,6.594l-5.16,5.16a.84.84,0,1,1-1.189-1.188L101.95,6,97.385,1.434A.84.84,0,0,1,98.573.246l5.16,5.16a.84.84,0,0,1,0,1.188Z"
                    transform="translate(0 0)"
                  />
                </g>
              </g>
            </svg>
          </button>
          <span class="text-sm mx-2">{{current | transDate}}</span>
          <button class="focus:outline-none">
            <svg class="w-6 fill-current text-black" viewBox="0 0 21 21">
              <g transform="translate(274 265) rotate(180)">
                <rect fill="none" width="21" height="21" transform="translate(253 244)" />
                <g transform="translate(364.138 260) rotate(180)">
                  <path
                    d="M103.732,6.594l-5.16,5.16a.84.84,0,1,1-1.189-1.188L101.95,6,97.385,1.434A.84.84,0,0,1,98.573.246l5.16,5.16a.84.84,0,0,1,0,1.188Z"
                    transform="translate(0 0)"
                  />
                </g>
              </g>
            </svg>
          </button>
        </div>
        <table class="w-full mb-4 bg-blue-300">
          <thead>
            <tr>
              <th
                v-for="title in weektitle"
                :key="title"
                class="border px-1 border-gray-600"
              >{{title}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in 6" :key="row">
              <td
                v-for="col in 7"
                :key="col"
                class="border px-1 border-gray-600 hover:bg-gray-500 cursor-pointer select-none"
              >10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 這裡要做一個自己的calender
  data() {
    return {
      weektitle: ["日", "一", "二", "三", "四", "五", "六"],
      current: new Date(),
      iniSdate:null,
    };
  },
  methods: {
    getfirstdate(date) {
      const minusDay = date.getDay();
      const result = date.setDate(date.getDate() - minusDay);
      return result;
    }
  },
  created() {
    const vm = this;
    const yyyy = vm.current.getFullYear();
    const MM = vm.current.getMonth() + 1;
    const firstweek = `${yyyy}-${MM}-01`;
    const fDate = new Date(firstweek);
    vm.iniSdate = new Date(vm.getfirstdate(fDate))
  },
  filters: {
    transDate(val) {
      const year = val.getFullYear();
      const month =
        val.getMonth() + 1 < 10 ? `0${val.getMonth() + 1}` : val.getMonth() + 1;
      const date = val.getDate() < 10 ? `0${val.getDate()}` : val.getDate();
      return `${year}-${month}-${date}`;
    }
  }
};
</script>

<style scoped lang="postcss">
</style>