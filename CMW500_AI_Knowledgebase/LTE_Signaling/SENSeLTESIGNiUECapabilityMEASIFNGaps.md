# SENSeLTESIGNiUECapabilityMEASIFNGaps

Module: LTE Signaling
Source: e115016f429449e9.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Capabilities
 > 
Measurement UE Capabilities
 > 
SENSe:LTE:SIGN<i>:UECapability:MEAS:IFNGaps?
SENSe:LTE:SIGN<i>:UECapability:MEAS:IFNGaps? 
[<Index>]
Returns a list of values indicating the need for downlink measurement gaps when operating on a specific E-UTRA band and measuring on (another) specific E-UTRA band.
The full list contains 256 times 256 values. The 256 values/repetitions correspond to the LTE bands. The list is ordered as follows:
{measured band: user-defined, 1, 2, ..., 255}
used band: user-defined
,
{measured band: user-defined, 1, 2, ..., 255}
used band: 1
, ...,
{measured band: user-defined, 1, 2, ..., 255}
used band: 255
Via the optional parameter <Index>, you can alternatively query the list for one measured band:
{used band: user-defined, 1, 2, ..., 255}
measured band <Index>
Query parameters: 
<Index>
UDEFined |
 
 OB1 |
 
 ... |
 
 OB45 |
 
 OB46 |
 
 OB48 |
 
 OB65 |
 
 ... |
 
 OB71 |
 
 OB250 |
 
 OB252 |
 
 OB255
Selects the measured E-UTRA band, for which the list is returned.
Return values: 
<Value>
OFF |
 
 ON
Without <Index>: 256 x 256 = 65536 values
With <Index>: 256 values
Example: 
See 
"Querying UE Capability Report Contents"
Usage: 
Query only
Firmware/Software: 
V3.0.30
V3.2.80: added <Index>, some bands added in later versions
V3.5.40: result array restructured
Manual operation: 
See 
"Inter-Freq Need for Gaps"
Top