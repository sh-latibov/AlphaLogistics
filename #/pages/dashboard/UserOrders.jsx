import clsx from "clsx";
import SvgSearch from "icons/SvgSearch";

function UserOrders(props) {
  const columns = [
    {
      title: `Tracking ID`,
    },
    {
      title: `Product`,
    },
    {
      title: `Date`,
    },
    {
      title: `Amount`,
    },
    {
      title: `Payment Mode`,
    },
    {
      title: `Status`,
    },
  ];

  const rows = [
    {
      id: `#20462`,
      product: `Hat`,
      date: `13/05/2022`,
      amount: `$4.95`,
      payment_mode: `Transfer Bank`,
      status: {
        title: `Delivered`,
        code: `success`,
      },
    },
    {
      id: `#20462`,
      product: `Keyboard`,
      date: `13/05/2022`,
      amount: `$4.95`,
      payment_mode: `Transfer Bank`,
      status: {
        title: `Canceled`,
        code: `error`,
      },
    },
    {
      id: `#20462`,
      product: `Monitor`,
      date: `13/05/2022`,
      amount: `$41.95`,
      payment_mode: `Transfer Bank`,
      status: {
        title: `Delivered`,
        code: `success`,
      },
    },
    {
      id: `#20462`,
      product: `Mouse`,
      date: `13/05/2022`,
      amount: `$14.95`,
      payment_mode: `Transfer Bank`,
      status: {
        title: `Process`,
        code: `warn`,
      },
    },

    {
      id: `#20462`,
      product: `Hat`,
      date: `13/05/2022`,
      amount: `$4.95`,
      payment_mode: `Transfer Bank`,
      status: {
        title: `Delivered`,
        code: `success`,
      },
    },

    {
      id: `#20462`,
      product: `Hat`,
      date: `13/05/2022`,
      amount: `$4.95`,
      payment_mode: `Transfer Bank`,
      status: {
        title: `Process`,
        code: `warn`,
      },
    },

    {
      id: `#20462`,
      product: `Hat`,
      date: `13/05/2022`,
      amount: `$4.95`,
      payment_mode: `Transfer Bank`,
      status: {
        title: `Process`,
        code: `warn`,
      },
    },

    {
      id: `#20462`,
      product: `Hat`,
      date: `13/05/2022`,
      amount: `$4.95`,
      payment_mode: `Transfer Bank`,
      status: {
        title: `Process`,
        code: `warn`,
      },
    },

    {
      id: `#20462`,
      product: `Hat`,
      date: `13/05/2022`,
      amount: `$4.95`,
      payment_mode: `Transfer Bank`,
      status: {
        title: `Process`,
        code: `warn`,
      },
    },

    {
      id: `#20462`,
      product: `Hat`,
      date: `13/05/2022`,
      amount: `$4.95`,
      payment_mode: `Transfer Bank`,
      status: {
        title: `Delivered`,
        code: `success`,
      },
    },
  ];
  return (
    <div className="py-10 px-7 | bg-[#F6F8FC]">
      <div className="fcb">
        <h3 className="text-3xl font-gm">Products</h3>

        <label htmlFor="search" className="relative">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search.."
            className="px-3 py-2 rounded-lg font-exo text-sm | border border-gray-300 focus:border-orange-primary duration-200"
          />
          <SvgSearch className="h-5 text-orange-primary absolute right-2 top-[0%] mt-2" />
        </label>
      </div>

      <div className="order__content | py-10">
        <div className="flex flex-col">
          <div className="overflow-x-auto shadow-md rounded-xl">
            <div className="inline-block min-w-full align-middle overflow-hidden">
              <table className="min-w-full table-fixed">
                <thead className="bg-white">
                  <tr>
                    {columns.map((d) => (
                      <th
                        scope="col"
                        className="w-32 pl-5 font-bold py-3 text-xs text-left text-black"
                      >
                        {d.title}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {rows.map((r, index) => (
                    <tr
                      key={index}
                      className="oddds rounded-xl hover:bg-gray-200 border-l border-r border-transparent hover:border-indigo-500"
                    >
                      <td className="px-5 text-sm font-medium font-inter text-[##16171E]">
                        <div className="flex items-center">{r.id}</div>
                      </td>
                      <td className="px-5 py-5 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {r.product}
                      </td>
                      <td className="px-5 py-5 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                        {r.date}
                      </td>
                      <td className="px-5 py-5 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {r.amount}
                      </td>
                      <td className="px-5 py-5 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {r.payment_mode}
                      </td>
                      <td
                        className={clsx({
                          "px-5 py-5 text-sm font-medium text-left whitespace-nowrap": true,
                          "text-[#1F9254]": r.status.code === `success`,
                          "text-[#9D0208]": r.status.code === `error`,
                          "text-[#FAA307]": r.status.code === `warn`,
                        })}
                      >
                        {r.status.title}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserOrders;