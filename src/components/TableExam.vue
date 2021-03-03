<template>
  <div class="table-page">
    <!-- table test -->
    <div id="table-demo" class="container">
      <h2>Resize Window to Demo Responsive Table Headers</h2>
      <table :class="{ 'with-header': `${table.bold}` }">
        <tr
          v-for="(row, x) in table.matrix"
          :key="x"
          :class="{ bold: table.bold && x === 0 }"
        >
          <td
            v-for="(col, y) in row"
            :key="y"
            :data-th="table.matrix[0][y].value"
          >
            {{ table.matrix[x][y].value }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableExam',
  data() {
    return {
      table: {
        bold: true,
        matrix: [
          [
            { value: 'Fruit' },
            { value: 'Vegetable' },
            { value: 'Snacks' },
            { value: 'Drinks' },
          ],
          [
            { value: 'Apple' },
            { value: 'Celery' },
            { value: 'Chips' },
            { value: 'Beer' },
          ],
          [
            { value: 'Banana' },
            { value: 'Eggplant' },
            { value: 'Candy' },
            { value: 'Coke' },
          ],
          [
            { value: 'Oranges' },
            { value: 'Squash' },
            { value: 'Nuts' },
            { value: 'Tea' },
          ],
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
$breakpoint: 480px;
#table-demo {
  margin: 20px 0;
  table {
    border: 1px solid #000;
    border-collapse: collapse;
    height: fit-content;
    min-width: 300px;
    overflow-y: scroll;
    width: 100%;
    tr {
      td {
        border: 1px solid #000;
        padding: 10px;
      }
    }
    .bold {
      background: #ddd;
      border: none;
      border-bottom: 1px solid #c2c2c2;
      border-left: none;
      border-right: none;
      td {
        background: #000;
        border: none;
        color: #fff;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
  .with-header {
    tr:first-of-type {
      td {
        border: none;
      }
    }

    // max-width 가 480px 이하인 경우에만 스타일 적용
    @media (max-width: $breakpoint) {
      tr:first-of-type {
        display: none;
      }
      tr {
        border: 1px solid #000;
        td {
          border: none;
          display: block;
          &:first-child {
            padding-top: 0.5em;
          }
          &:last-child {
            padding-bottom: 0.5em;
          }
          &::before {
            content: attr(data-th) ': ';
            display: inline-block;
            font-weight: bold;

            @media (min-width: $breakpoint) {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>
