import { useEffect } from "react";
import { DataTable } from "simple-datatables";
import "simple-datatables/dist/style.css"; // Import required styles

export default function MyDataTable() {
  useEffect(() => {
    const element = document.querySelector("#default-table");
    if (element) {
      new DataTable(element, {
        paging: true,
        perPage: 10,
        perPageSelect: [5, 10, 20, 50],
        firstLast: true,
        nextPrev: true,
        sortable: true,
        locale: "en-US",
        numeric: true,
        caseFirst: "false",
        ignorePunctuation: true,
      });
    }
  }, []);

  return (
    <div className="overflow-x-auto p-4 pr-2">
      <table id="default-table" className="min-w-full text-left mx-auto overflow-hidden rounded-xl bg-white shadow-md">
        <thead className="bg-gray-200 p-4 mx-auto ">
          <tr>
            <th>Name</th>
            <th>Release Date</th>
            <th>NPM Downloads</th>
            <th>Growth</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-medium text-gray-900 whitespace-nowrap">Flowbite</td>
            <td>2021/25/09</td>
            <td>269000</td>
            <td>49%</td>
          </tr>
          <tr>
            <td className="font-medium text-gray-900 whitespace-nowrap">React</td>
            <td>2013/24/05</td>
            <td>4500000</td>
            <td>24%</td>
          </tr>
          <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Angular</td>
            <td>2010/20/09</td>
            <td>2800000</td>
            <td>17%</td>
          </tr>
          <tr>
            <td className="font-medium text-gray-900 whitespace-nowrap">Vue</td>
            <td>2014/12/02</td>
            <td>3600000</td>
            <td>30%</td>
          </tr>
          <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Svelte</td>
            <td>2016/26/11</td>
            <td>1200000</td>
            <td>57%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Ember</td>
            <td>2011/08/12</td>
            <td>500000</td>
            <td>44%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Backbone</td>
            <td>2010/13/10</td>
            <td>300000</td>
            <td>9%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">jQuery</td>
            <td>2006/28/01</td>
            <td>6000000</td>
            <td>5%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Bootstrap</td>
            <td>2011/19/08</td>
            <td>1800000</td>
            <td>12%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Foundation</td>
            <td>2011/23/09</td>
            <td>700000</td>
            <td>8%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Bulma</td>
            <td>2016/24/10</td>
            <td>500000</td>
            <td>7%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Next.js</td>
            <td>2016/25/10</td>
            <td>2300000</td>
            <td>45%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Nuxt.js</td>
            <td>2016/16/10</td>
            <td>900000</td>
            <td>50%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Meteor</td>
            <td>2012/17/01</td>
            <td>1000000</td>
            <td>10%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Aurelia</td>
            <td>2015/08/07</td>
            <td>200000</td>
            <td>20%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Inferno</td>
            <td>2016/27/09</td>
            <td>100000</td>
            <td>35%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Preact</td>
            <td>2015/16/08</td>
            <td>600000</td>
            <td>28%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Lit</td>
            <td>2018/28/05</td>
            <td>400000</td>
            <td>60%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Alpine.js</td>
            <td>2019/02/11</td>
            <td>300000</td>
            <td>70%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Stimulus</td>
            <td>2018/06/03</td>
            <td>150000</td>
            <td>25%</td>
        </tr>
        <tr>
            <td class="font-medium text-gray-900 whitespace-nowrap dark:text-white">Solid</td>
            <td>2021/05/07</td>
            <td>250000</td>
            <td>80%</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}
