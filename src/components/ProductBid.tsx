/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/button-has-type */
import carImage from '../../assets/images/carImage.png';
import { ProductInfo } from './ProductInfo';
import '../renderer/App.css';

export function ProductBid() {
  return (
    <div className="flex justify-center mb-5">
      <div className="md:w-1/3 w-1/2">
        <img alt="product" src={carImage} className="rounded" />
        <ProductInfo />
      </div>
      <div className="sticky top-5 left-0 mr-5 block w-1/2">
        <div className="bg-white shadow-lg max-width-container min-h-[420px] rounded-lg flex flex-col items-center px-3 py-5 shadow-agahiOne sticky top-0">
          <div className="flex items-center justify-between w-full mt-4">
            <p className="text-xs font-medium text-[#707070]">قیمت پایه :</p>
            <div>
              <span className="text-sm font-bold text-[#212121] ml-1">
                128,000,000
              </span>
              <span className="text-[10px] font-normal text-[#A8A8A8]">
                تومان
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between w-full mt-4">
            <p className="text-xs font-medium text-[#707070]">
              شروع پیشنهاد قیمت :
            </p>
            <div>
              <span className="text-sm font-bold text-[#212121]">۱۴۰۱/۸/۲</span>
              <span className="text-sm font-bold text-[#212121] ml-3 ">
                14:30
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between w-full my-4">
            <p className="text-xs font-medium text-[#707070]">
              آخرین مهلت پیشنهاد قیمت :
            </p>
            <div>
              <span className="text-sm font-bold text-[#212121]">۱۴۰۱/۸/۳</span>
              <span className="text-sm font-bold text-[#212121] ml-3">
                14:30
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center mt-auto w-full">
            <div className="flex font-bold text-sm border p-1 items-center rounded-lg w-full h-10 text-[#212121] justify-between">
              <button className="flex justify-center items-center w-8  h-full gray-bg rounded text-[18px]">
                +
              </button>
              <p>
                225,500,000{' '}
                <span className="text-gray-400 font-thin text-[13px]">
                  تومان
                </span>
              </p>
              <button className="flex justify-center items-center w-8  h-full gray-bg rounded text-[18px] text-gray-400">
                -
              </button>
            </div>
            <button className="font-bold text-sm yellow-bg border border-[#FFCC00] rounded-lg w-full h-10 mt-4 text-[#212121]">
              پیشنهاد قیمت
            </button>
            <div className="w-full flex flex-col mt-4">
              <div className="flex justify-between mb-1">
                <p>بیشترین قیمت</p>
              </div>
              <div className="flex flex-col items-center justify-center border border-gray-300 rounded-lg w-full mt-1 duration-500 h-10 overflow-hidden transition-all ease-in">
                <div className="w-full overflow-hidden h-[49px] flex px-3.5">
                  <div className="flex justify-between items-center w-full py-4 undefined">
                    <div className="flex items-center">
                      <p
                        className="text-[11px] sm:text-sm font-medium text-[#707070] text-left"
                        dir="ltr"
                      >
                        0912*****03
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="flex flex-col false items-center">
                        <p className="text-[11px] sm:text-sm font-bold text-[#212121]">
                          129,500,000
                        </p>
                      </div>
                      <span className="text-[10px] font-normal text-[#A8A8A8] mr-1">
                        تومان
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
