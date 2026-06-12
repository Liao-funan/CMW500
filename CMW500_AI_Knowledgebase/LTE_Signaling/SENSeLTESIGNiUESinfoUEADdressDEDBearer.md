# SENSeLTESIGNiUESinfoUEADdressDEDBearer

Module: LTE Signaling
Source: 25d5be81d80e4599.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Info
 > 
SENSe:LTE:SIGN<i>:UESinfo:UEADdress:DEDBearer?
SENSe:LTE:SIGN<i>:UESinfo:UEADdress:DEDBearer? 
Returns information about all established dedicated bearers. Three values are returned per bearer:
{
<ID>, <TFTPortLow>, <TFTPortHigh>
}
Bearer 1
, ..., {...}
Bearer n
Use this command if you have configured a single port range per bearer, applicable to the uplink and the downlink.
Return values: 
<ID>
Dedicated bearer ID as string
Example: "6 (->5, Voice)" means dedicated bearer 6, mapped to default bearer 5, using dedicated bearer profile "Voice"
<TFTPortLow>
Lower end of TFT port range assigned to the dedicated bearer
Range: 
1  to  65535
<TFTPortHigh>
Upper end of TFT port range assigned to the dedicated bearer
Range: 
1  to  65535
Usage: 
Query only
Firmware/Software: 
V3.2.80
Manual operation: 
See 
"Dedicated Bearer"
Top