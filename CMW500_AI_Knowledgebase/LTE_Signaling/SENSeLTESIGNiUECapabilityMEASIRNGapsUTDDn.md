# SENSeLTESIGNiUECapabilityMEASIRNGapsUTDDn

Module: LTE Signaling
Source: 52566b1ef6694c83.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Capabilities
 > 
Measurement UE Capabilities
 > 
SENSe:LTE:SIGN<i>:UECapability:MEAS:IRNGaps:UTDD<n>?
SENSe:LTE:SIGN<i>:UECapability:MEAS:IRNGaps:UTDD<n>? 
[<Index>]
Returns a list of values indicating the need for downlink measurement gaps when operating on a specific E-UTRA band and measuring on a specific UTRA TDD band.
The full list contains 32 times 256 values. Each block of 32 values corresponds to the UTRA TDD bands. The 256 repetitions correspond to the E-UTRA bands:
{measured band: 1, 2, ..., 32}
used band: user-defined
,
{measured band: 1, 2, ..., 32}
used band: 1
, ...,
{measured band: 1, 2, ..., 32}
used band: 255
Via the optional parameter <Index>, you can alternatively query the list for a single UTRA TDD band:
{used band: user-defined, 1, 2, ..., 255}
measured band <Index>
Suffix: 
<n>
128
Query parameters: 
<Index>
OB1 |
 
 OB2 |
 
 ... |
 
 OB32
Selects the measured UTRA TDD band, for which the list is returned.
Return values: 
<Value>
OFF |
 
 ON
Without <Index>: 32 x 256 = 8192 values
With <Index>: 256 values
Example: 
See 
"Querying UE Capability Report Contents"
Usage: 
Query only
Firmware/Software: 
V3.2.80
V3.5.40: result array restructured
Manual operation: 
See 
"Inter-RAT Need for Gaps"
Top