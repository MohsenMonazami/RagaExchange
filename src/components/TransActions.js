const TransActions = () => {
    return(
        <div>
            <div className="row mt-2">
                      <div className="container transaction-item px-4 py-3">
                        <div className="row mt-2">
                          <div className="col-md-1  text-end">
                            <p className="status-success">موفق </p>
                          </div>
                          <div className="col-md-3  text-end">
                            <p className="date">
                              15 Mordad 1402 <span className="ms-3">19:24</span>
                            </p>
                          </div>
                          <div className="col-md-5  text-end">
                            <p className="caption">
                              ...توضیحات: لورم ایپسوم یک متن ساخت
                            </p>
                          </div>
                          <div className="col-md-3  text-end">
                            <div className="row ">
                              <p className="transaction-title">
                                انتقال داخلی <i className="bi bi-house-door" />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="container transaction-item px-4 py-3">
                        <div className="row mt-2">
                          <div className="col-md-1  text-end">
                            <p className="status-success">موفق</p>
                          </div>
                          <div className="col-md-3  text-end">
                            <p className="date">
                              13 Mordad 1402 <span className="ms-3">23:45</span>
                            </p>
                          </div>
                          <div className="col-md-5  text-end">
                            <p className="caption">
                              ...توضیحات: لورم ایپسوم یک متن ساخت
                            </p>
                          </div>
                          <div className="col-md-3  text-end">
                            <div className="row ">
                              <p className="transaction-title">
                                شارژ کیف پول <i className="bi bi-house-door" />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="container transaction-item px-4 py-3">
                        <div className="row mt-2">
                          <div className="col-md-1  text-end">
                            <p className="status-fail">ناموفق </p>
                          </div>
                          <div className="col-md-3  text-end">
                            <p className="date">
                              2 Tir 1402 <span className="ms-3">14:23</span>
                            </p>
                          </div>
                          <div className="col-md-5  text-end">
                            <p className="caption">
                              ...توضیحات: لورم ایپسوم یک متن ساخت
                            </p>
                          </div>
                          <div className="col-md-3  text-end">
                            <div className="row ">
                              <p className="transaction-title">
                                شارژ کیف پول <i className="bi bi-house-door" />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
        </div>
    )
}

export default TransActions;