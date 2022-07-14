import '.styles.css'
import NotificationButton from '../NotificationButton'

function SalesCard() {
return (
 
      <div className="sikautilidades-card">
                    <h2 className="sales-title">Vendas</h2>
                    <div>
                        <div className="form-control-container">
                            <input className="form-control" type="text"/>
                        </div>
                        <div className="form-control-container">
                            <input className="form-control" type="text"/>
                        </div>
                    </div>

                    <div>
                        <table className="sales-table">
                            <thead>
                                <tr>
                                    <th className="show992">ID</th>
                                    <th className="show576">Data</th>
                                    <th>Vendedor</th>
                                    <th className="show992">Visitas</th>
                                    <th className="show992">Vendas</th>
                                    <th>Total</th>
                                    <th>Notificar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="show992">#341</td>
                                    <td className="show576">08/07/2022</td>
                                    <td>Fabiano</td>
                                    <td className="show992">15</td>
                                    <td className="show992">11</td>
                                    <td>R$ 800.00</td>
                                    <td>
                                        <div className="red-btn-container">
                                            <NotificationButton/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="show992">#341</td>
                                    <td className="show576">08/07/2022</td>
                                    <td>Cilene</td>
                                    <td className="show992">15</td>
                                    <td className="show992">11</td>
                                    <td>R$ 200.00</td>
                                    <td>
                                        <div className="red-btn-container">
                                            <NotificationButton/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="show992">#341</td>
                                    <td className="show576">08/07/2022</td>
                                    <td>Neia</td>
                                    <td className="show992">15</td>
                                    <td className="show992">11</td>
                                    <td>R$ 400.00</td>
                                    <td>
                                        <div className="red-btn-container">
                                            <NotificationButton/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="show992">#341</td>
                                    <td className="show576">08/07/2022</td>
                                    <td>Geri</td>
                                    <td className="show992">15</td>
                                    <td className="show992">11</td>
                                    <td>R$ 700.00</td>
                                    <td>
                                        <div className="red-btn-container">
                                            <NotificationButton/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="show992">#341</td>
                                    <td className="show576">08/07/2022</td>
                                    <td>Groxo</td>
                                    <td className="show992">15</td>
                                    <td className="show992">11</td>
                                    <td>R$ 700.00</td>
                                    <td>
                                        <div className="red-btn-container">
                                          <NotificationButton/>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>


    )
}

export default SalesCard
