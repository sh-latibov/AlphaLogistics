import clsx from "clsx";
import SvgFilter from "icons/SvgFilter";
import SvgSearch from "icons/SvgSearch";
import Link from "next/link";
import OrderProgress from "./OrderProgress";
import Moment from "react-moment";

function UserOrders(props) {

  const columns = [
    {
      title: `Tracking ID`,
    },
    {
      title: `Product`,
      filter_by: `products`,
    },
    {
      title: `Date`,
      filter_by: `date`,
    },
    {
      title: `Amount`,
    },
    {
      title: `Payment Mode`,
    },
    {
      title: `Status`,
      filter_by: `status`,
    },
  ];

  return (
    <div className="mobile-padding py-10 px-7 | bg-[#F6F8FC]">
      <div className="fcb order-mobile">
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
          <div className="mobile-shadow-none overflow-x-auto shadow-md rounded-xl">
            <div className="inline-block min-w-full align-middle overflow-hidden">
              <div className='pc-hide'>
                {
                  props?.data?.map(item =>
                    <div className='mobile-tracking_block' key={item.id}>
                      <h3 className='mobile-tracking_title'>
                        <b>Product:</b>
                        <span>
                            {item.uid}
                        </span>
                      </h3>
                      <div className='mobile-tracking-products_block'>
                        <div className='mobile-tracking-product_block'>
                          {/*<div>*/}
                          {/*  <span>Tracking ID:</span>*/}
                          {/*  <span>{item.uid}</span>*/}
                          {/*</div>*/}
                          <div className='mobile-tracking-product-item_block'>
                            <span>Date:</span>
                            <span>{item.load_time}</span>
                          </div>
                          <div className='mobile-tracking-product-item_block'>
                            <span>Amount:</span>
                            <span>{item.products_price}</span>
                          </div>
                          <div className='mobile-tracking-product-item_block'>
                            <span>Payment Mode:</span>
                            <span>{item.payment_mode}</span>
                          </div>
                          <div className='mobile-tracking-product-item_block'>
                            <span>Status:</span>
                            <span>{item.status}</span>
                          </div>
                        </div>
                        <div className='mobile-tracking-product-status_block'>
                          <ul className="steps steps-vertical">
                            <li className={`step ${item.status === 'new' ? "step-primary" : ""}`}>
                              <div className="ordere-content">
                                <div className="flex justify-between items-center">
                                  <span>
                                    Ordered
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className={`step ${item.status === 'in_process' ? "step-primary" : ""}`}>
                              <div className="ordere-content">
                                <div className="flex justify-between items-center">
                                  <span>
                                    Shipped
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li className={`step ${item.status === 'completed' ? "step-primary" : ""}`}>
                              <div className="ordere-content">
                                <div className="flex justify-between items-center">
                                  <span>
                                    Delivering
                                  </span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                    </div>
                  )
                }
              </div>
              <table className="min-w-full table-fixed mobile-hide">
                <thead className="bg-white">
                  <tr>
                    {columns.map((d, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="w-32 pl-5 font-bold py-3 text-sm text-left text-[#16171E]"
                      >
                        <div className="flex items-center">
                          {d.title}

                          {d.filter_by && (
                            <SvgFilter className="text-[#E0E0E0] h-4 ml-2 | click:scale" />
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {props?.data?.map((r, index) => (
                    <>
                      <Link href={`/dashboard/orders/${r.uid}`} key={index}>
                          <tr
                            className="oddds rounded-xl hover:bg-orange-primary/20 border-l border-r border-transparent hover:border-orange-500 cursor-pointer duration-200"
                          >
                            <td className="px-5 text-sm font-medium font-inter text-[#16171E]">
                              #{r.uid}
                            </td>
                            <td className="px-5 py-5 text-sm font-medium text-[#16171E] whitespace-nowrap">
                              {r.product}
                            </td>
                            <td className="px-5 py-5 text-sm font-medium text-[#16171E] whitespace-nowrap">
                              {r.load_time}
                            </td>
                            <td className="px-5 py-5 text-sm font-medium text-[#16171E] whitespace-nowrap">
                              {r.products_price}
                            </td>
                            <td className="px-5 py-5 text-sm font-medium text-[#16171E] whitespace-nowrap">
                              {r.payment_mode}
                            </td>
                            <td
                              className={clsx({
                                "px-5 py-5 text-sm font-medium text-left whitespace-nowrap": true,
                                // "text-[#1F9254]": r.status.code === `success`,
                                // "text-[#9D0208]": r.status.code === `error`,
                                // "text-[#FAA307]": r.status.code === `warn`,
                              })}
                            >
                              {/*{r.status.title}*/}
                            </td>
                          </tr>
                      </Link>
                      <Link href={`/dashboard/orders/${r.uid}`} key={index}>
                        <tr
                          className="oddds rounded-xl hover:bg-orange-primary/20 border-l border-r border-transparent hover:border-orange-500 cursor-pointer duration-200"
                        >
                          <td colSpan='6'>
                            <OrderProgress status={r.status} />
                          </td>
                        </tr>
                      </Link>
                    </>

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
