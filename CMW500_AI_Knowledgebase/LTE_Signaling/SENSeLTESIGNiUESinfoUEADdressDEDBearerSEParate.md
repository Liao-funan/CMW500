# SENSeLTESIGNiUESinfoUEADdressDEDBearerSEParate

Module: LTE Signaling
Source: 9cafcec4f539494c.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Info
 > 
SENSe:LTE:SIGN<i>:UESinfo:UEADdress:DEDBearer:SEParate?
SENSe:LTE:SIGN<i>:UESinfo:UEADdress:DEDBearer:SEParate? 
Returns information about all established dedicated bearers. Five values are returned per bearer:
{
<ID>, <TFTPortLowDL>, <TFTPortHighDL>, <TFTPortLowUL>, <TFTPortHighUL>
}
Bearer 1
, ..., {...}
Bearer n
Use this command if you have configured separate port ranges for the uplink and the downlink.
Return values: 
<ID>
Dedicated bearer ID as string
Example: "6 (->5, Voice)" means dedicated bearer 6, mapped to default bearer 5, using dedicated bearer profile "Voice"
<TFTPortLowDL>
Lower end of TFT port range assigned to the downlink
Range: 
1  to  65535
<TFTPortHighDL>
Upper end of TFT port range assigned to the downlink
Range: 
1  to  65535
<TFTPortLowUL>
Lower end of TFT port range assigned to the uplink
Range: 
1  to  65535
<TFTPortHighUL>
Upper end of TFT port range assigned to the uplink
Range: 
1  to  65535
Example: 
See 
"Querying UE Information"
Usage: 
Query only
Firmware/Software: 
V3.5.30
Manual operation: 
See 
"Dedicated Bearer"
Top