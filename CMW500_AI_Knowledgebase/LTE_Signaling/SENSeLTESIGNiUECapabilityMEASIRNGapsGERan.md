# SENSeLTESIGNiUECapabilityMEASIRNGapsGERan

Module: LTE Signaling
Source: a015c9e4bb5c4425.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Capabilities
 > 
Measurement UE Capabilities
 > 
SENSe:LTE:SIGN<i>:UECapability:MEAS:IRNGaps:GERan?
SENSe:LTE:SIGN<i>:UECapability:MEAS:IRNGaps:GERan? 
[<Index>]
Returns a list of values indicating the need for downlink measurement gaps when operating on a specific E-UTRA band and measuring on a specific GERAN band.
The full list contains 11 times 256 values. Each block of 11 values corresponds to the following GERAN bands: GSM 450, GSM 480, GSM 710, GSM 750, GSM 810, GSM 850, P-GSM 900, E-GSM 900, R-GSM 900, GSM 1800, GSM 1900. The 256 repetitions correspond to the E-UTRA bands:
{measured band: GSM 450, GSM 480, ..., GSM 1900}
used band: user-defined
,
{measured band: GSM 450, GSM 480, ..., GSM 1900}
used band: 1
, ...,
{measured band: GSM 450, GSM 480, ..., GSM 1900}
used band: 256
Via the optional parameter <Index>, you can alternatively query the list for a single GERAN band:
{used band: user-defined, 1, 2, ..., 255}
measured band <Index>
Query parameters: 
<Index>
G045 |
 
 G048 |
 
 G071 |
 
 G075 |
 
 G081 |
 
 G085 |
 
 G09P |
 
 G09E |
 
 G09R |
 
 G18 |
 
 G19
Selects the measured GERAN band, for which the list is returned.
Return values: 
<Value>
OFF |
 
 ON
Without <Index>: 11 x 256 = 2816 values
With <Index>: 256 values
Example: 
See 
"Querying UE Capability Report Contents"
Usage: 
Query only
Firmware/Software: 
V3.0.30
V3.2.80: added <Index>
V3.5.40: result array restructured
Manual operation: 
See 
"Inter-RAT Need for Gaps"
Top