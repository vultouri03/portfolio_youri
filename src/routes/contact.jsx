import { Outlet, Link } from "react-router-dom";
import * as React from "react";

const Contact = () => {
          return (
                    <>
                              <div className="w-full px-3 border-white">
                                        <div className="rounded border-white border hover:border-purple overflow-hidden shadow-lg bg-orange-200 place-items-center">
                                                  <div className="h-1/2">
                                                            <div className="px-6 py-4 pb-1/3">
                                                                      <div className="font-bold text-xl mb-2 text-black">Contact</div>
                                                                      <ul className="list-disc list-inside py-2 text-blue-700 ">
                                                                                <li>
                                                                                          <a className="hover:text-purple-600" target="_blank" href="https://www.linkedin.com/in/youri-de-gier-8a9822305/">LinkedIn</a>
                                                                                </li>
                                                                                <li>
                                                                                          <a className="hover:text-purple-600" target="_blank" href="https://github.com/vultouri03">Github</a>
                                                                                </li>
                                                                      </ul>


                                                            </div>
                                                  </div>
                                        </div>
                              </div>
                    </>
          )
}

export default Contact