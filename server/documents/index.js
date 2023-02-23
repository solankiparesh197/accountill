import moment from 'moment'

export default function (
  {
    id, name, address, organisation, gstNo, email, dueDate, date, subTotal, vat, total, items, rates, currency
  }) {
  const today = new Date();
  const renderTR = () => {
    let html = '';
    for(let i=0; i<10; i++){
      let item = items[i]
      if(item){
        html += `<tr style="border: none;outline: none;">
            <td style="border: none;outline: none; font-size: 9px">${item.itemName}</td>
            <td style="border: none;outline: none; font-size: 9px">${item.quantity}</td>
            <td style="border: none;outline: none; font-size: 9px">${item.unitPrice ? parseFloat(item.unitPrice).toFixed(2) : 0.00}</td>
            <td style="border: none;outline: none; text-align: right; font-size: 9px">${(item.quantity * item.unitPrice).toFixed(2)}</td>
        </tr>`
      } else {
        html += `
          <tr style="border: none;outline: none;">
            <td style="border: none;outline: none; padding-top: 15px; padding-bottom: 14px"></td>
            <td style="border: none;outline: none; padding-top: 15px; padding-bottom: 14px"></td>
            <td style="border: none;outline: none; padding-top: 15px; padding-bottom: 14px"></td>
            <td style="border: none;outline: none; padding-top: 15px; padding-bottom: 14px"></td>
          </tr>
        `
      }
    }
    return html;
  }

return `
<!DOCTYPE html>
<html>
<head>
    <style>
        .invoice-container {
            margin: 0;
            font-family: 'Roboto', sans-serif;
            width: 100%;
        }

        .invoice-type {
            background-color: #F37651;
            color: #FFFFFF;
            align-self: center;
            font-size: 24px;
            font-weight: bolder;
            width: 80%;
            text-align: end;
            background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(243, 118, 81, 1) 100%);
        }

        table {
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        table td, table th {
            padding: 10px;
        }

        .bg-light {
            background-color: rgba(243, 118, 81, 0.1);
        }

        .table-header {
            border: none;
            outline: none;
            background-color: #F37651 !important;
        }

        table th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            color: #FFFFFF;
            border: none;
            outline: none;
        }

        .header td {
            padding: 0;
        }

        .address {
            display: -webkit-box;
            padding: 10px 20px;
            line-height: 10px;
            font-size: 12px;
            color: #3A3A3A;
        }

        .address-content {
            padding-top: 1px;
            text-align: left;
            width: 50%;
            font-size: 9px;
            line-height: 5px;
        }

        .summary {
            display: -webkit-box;
            background-color: rgba(243, 118, 81, 0.1);
            padding-top: 20px;
        }

        .title {
            text-transform: uppercase;
            color: #3A3A3A;
            font-size: 11px;
            line-height: 5px;
            font-weight: 600;
            padding-bottom: 3px;
        }

        img {
            width: 100px;
        }
        
        b{ font-weight: 700; !important; } 
        
        .left-section {
            width: 50%;
        }

        .right-section {
            height: 80px;
            width: 80%;
            float: right;
            text-align: right;
            padding: 10px 0 0 0;
            background-color: #F37651 !important;
        }

        .right-section td {
            font-size: 10px;
            font-weight: bold;
            line-height: 5px;
            color: #3A3A3A;
            text-align: right;
        }
        .header {
            display: -webkit-box;
        }
    </style>
</head>
<body>
<div class="invoice-container">
    <section class="header">
        <div style="width: 20%">
            <img src="https://tecoreng.com/wp-content/uploads/2022/12/logo.png"/>
        </div>
        <div class="invoice-type">
            <div style="padding: 12px">
                Invoice
            </div>
        </div>
    </section>
    <section class="address">
        <div class="address-content">
          <p class="title">From:</p>
          <h4 style="font-size: 10px; font-weight: 700">Technical Core Engineers</h4>
          <p style="">Paresh Solanki</p>
          <p style="">paresh@tecoreng.com</p>
          <p style=""><b>PAN No : AASFT4987F </b></p>
          <p style=""><b>GST No : 24AASFT4987F1ZJ</b></p>
  
          <p style=""><b>Invoice No : TCE-${id}</b></p>
          <p style=""><b>Invoice Date : ${moment(date).format('ll')}</b></p>
        </div>
        <div class="address-content">
          <p class="title">Bill to:</p>
          <h4 style="font-size: 10px;">${organisation}</h4>
          <p style="">${name}</p>
          <p style="">${email}</p>
          <p style="line-height: 12px">${address}</p>
          <p style=""><b>GST No : ${gstNo}</b></p>
          <p style=""><b>Due Date : ${moment(dueDate).format('ll')}</b></p>
        </div>
    </section>

    <table style="max-height: 310px">
        <thead>
            <tr class="table-header">
              <th style="width: 61%; font-size: 9px">Item</th>
              <th style="width: 13%; font-size: 9px">Quantity</th>
              <th style="width: 13%; font-size: 9px">Price(${currency})</th>
              <th style="width: 13%; text-align: right; font-size: 9px">Amount(${currency})</th>
            </tr>
        </thead>
        <tbody class="bg-light">
          `+renderTR()+`
        </tbody>
    </table>

    <section class="summary">
      <div class="left-section">
        <div style="padding: 5px 10px">
          <H4 style="font-size: 10px;">Payment Info:</H4>
          <p style="font-size: 9px; line-height: 5px">Account No: 0123456789</p>
          <p style="font-size: 9px; line-height: 5px">Name: Lorem Ipsum</p>
          <p style="font-size: 9px; line-height: 5px">Bank Account: 0123 456 7890</p>
        </div>
      </div>
      <div style="width: 50%">
          <table class="right-section">
              <tr>
                  <td style="text-align: left">Subtotal:</td>
                  <td>${currency} ${subTotal}</td>
              </tr>
              <tr>
                  <td style="text-align: left">GST(${rates}%):</td>
                  <td>${vat}</td>
              </tr>
              <tr style="border-top: 1px solid #FFFFFF; padding-top: 10px">
                  <td style="text-align: left; font-size: 11px;">Total:</td>
                  <td style="font-size: 11px;">${currency} ${total}</td>
              </tr>
          </table>
      </div> 
    </section>
    <section style="background-color: rgba(243, 118, 81, 0.1);">
        <table>
            <tr>
                <td style="text-align: left">
                    <img src="https://tecoreng.com/wp-content/uploads/2023/02/stamp.png" />
                </td>
                <td style="text-align: center; width: 100px">
                    <div>
                        <img style="width: 100px; height: 100px" src="https://tecoreng.com/wp-content/uploads/2023/02/sign.png" alt="sign">
                    </div>
                    <div style="font-size: 10px">
                        Paresh Solanki
                    </div>
                </td>
            </tr>
        </table>
    </section>
    <section style="background-color: #F37651;">
        <table>
            <tr style="padding: 10px;">
                <td style="width: 30%; padding: 0 10px; word-break: break-word;">
                    <table>
                        <tr>
                            <td style="padding: 0">
                                <img src="https://tecoreng.com/wp-content/uploads/2023/02/location.svg" style="width: 20px;height: 20px;align-self: center;">
                            </td>
                            <td style="padding: 0">
                                <p style="font-size: 9px; line-height: 11px; color: #FFFFFF; margin-left: 5px; align-self: center;">
                                    C-704, Ganesh Glory 11, Jagatpur Rd, near BSNL Office, Ahmedabad, Gujarat 382470.</p>
                            </td>
                        </tr>
                    </table>
                </td>
                <td style="width: 22%; padding: 0 10px; word-break: break-word;">
                    <table>
                        <tr>
                            <td style="padding: 0">
                                <img src="https://tecoreng.com/wp-content/uploads/2023/02/email.svg" style="width: 20px;height: 20px;align-self: center;">
                            </td>
                            <td style="padding: 0">
                                <p style="font-size: 9px; line-height: 11px; color: #FFFFFF; margin-left: 5px; align-self: center;">
                                    info@tecoreng.com</p>
                            </td>
                        </tr>
                    </table>
                </td>
                <td style="width: 22%; padding: 0 10px; word-break: break-word;">
                    <table>
                        <tr>
                            <td style="padding: 0">
                                <img src="https://tecoreng.com/wp-content/uploads/2023/02/phone.svg" style="width: 20px;height: 20px;align-self: center;">
                            </td>
                            <td style="padding: 0">
                                <p style="font-size: 9px; line-height: 11px; color: #FFFFFF; margin-left: 5px; align-self: center;">+91
                                    07946045342</p>
                            </td>
                        </tr>
                    </table>
                </td>
                <td style="width: 22%; padding: 0 10px; word-break: break-word;">
                    <table>
                        <tr>
                            <td style="padding: 0">
                                <img src="https://tecoreng.com/wp-content/uploads/2023/02/web.svg" style="width: 20px;height: 20px;align-self: center;">
                            </td>
                            <td style="padding: 0">
                                <p style="font-size: 9px; line-height: 11px; color: #FFFFFF; margin-left: 5px; align-self: center;">
                                    www.tecoreng.com</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </section>
</div>
</body>
</html>`
;
};