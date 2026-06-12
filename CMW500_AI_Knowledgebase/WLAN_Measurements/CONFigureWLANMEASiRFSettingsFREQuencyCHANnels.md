# CONFigureWLANMEASiRFSettingsFREQuencyCHANnels

Module: WLAN Measurements
Source: e6229ef1cab34bfb.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:WLAN:MEAS<i>:RFSettings:FREQuency:CHANnels
CONFigure:WLAN:MEAS<i>:RFSettings:FREQuency:CHANnels 
<Channel>
The command logic depends on the standard. This description applies to the standards 802.11 a/b/g/n/p. For other standards, see 
CONFigure:
​
WLAN:
​
MEAS<i>:
​
RFSettings:
​
FREQuency:
​
CHANnels<Ch>
.
The command configures the center frequency of the RF analyzer. It sets the frequency to the center of the channel with the index <Channel>.
Before using this command, configure the standard, the bandwidth and the band, see:
CONFigure:
​
WLAN:
​
MEAS<i>:
​
ISIGnal:
​
STANdard
CONFigure:
​
WLAN:
​
MEAS<i>:
​
ISIGnal:
​
BWIDth
CONFigure:
​
WLAN:
​
MEAS<i>:
​
RFSettings:
​
FREQuency:
​
BAND
Parameters:
<Channel>
Channel index
The range depends on the band:
2.4-GHz band: 1 to 14
4-GHz and 5-GHz bands: 0 to 200
Range: 
0  to  200
*RST:
1
Firmware/Software: 
V3.2.71
Manual operation: 
See 
"Band / Channel / Frequency"
Top