## Description
(GET) This method will return list of activities. Requires a request token.

## Resource URL
/{api-version}/activities/

## Response Fields
<table>
<tr>
<td valign="top"><b>activities</b></td>
<td>Array of activites (without loging history). Each of them contains name, desc, type, color, icon. If one of the fields will be not defined by user - server will complete it with default values.</td>
</tr>
</table>
