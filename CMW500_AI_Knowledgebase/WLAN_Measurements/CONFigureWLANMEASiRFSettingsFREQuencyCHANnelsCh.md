# CONFigureWLANMEASiRFSettingsFREQuencyCHANnelsCh

Module: WLAN Measurements
Source: 3e2cd82ed9444dbd.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:WLAN:MEAS<i>:RFSettings:FREQuency:CHANnels<Ch>
CONFigure:WLAN:MEAS<i>:RFSettings:FREQuency:CHANnels<Ch> 
<Channel>
The command logic depends on the standard. This description applies to the standards IEEE 802.11ac and 802.11ax. For other standards, see 
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
CHANnels
.
A setting command sets channel number <Ch> to the channel index <Channel>. The other 20-MHz channels of the bandwidth are configured automatically, resulting in a sequence of channel indices with the increment 4, see examples.
A query returns the channel indices of all 20-MHz channels as comma-separated list.
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
Suffix: 
<Ch>
1..8
Selects the 20-MHz channel to be configured. For a query, the suffix is ignored.
The range depends on the signal bandwidth, see table below.
Setting parameters: 
<Channel>
Channel index for the 20-MHz channel number <Ch>
For a valid configuration, all 20-MHz channels must fit into the band. So the effective ranges depend on <Ch>, see table below.
Range: 
0  to  200
*RST:
1
Return values: 
<Channels>
Comma-separated list of channel indices
1, 2, 4, or 8 values, see table below
Range: 
0 to 200
Example: 
Bandwidth 160 MHz, valid configuration:
CONF:WLAN:MEAS:RFS:FREQuency:CHANnels6 50
Resulting channels: 
30, 34, 38, 42, 46, 50, 54, 58
Example: 
Bandwidth 80 MHz, valid configuration:
CONF:WLAN:MEAS:RFS:FREQuency:CHANnels3 10
Resulting channels: 
2, 6, 10, 14
Example: 
Bandwidth 80 MHz, invalid configuration:
CONF:WLAN:MEAS:RFS:FREQuency:CHANnels4 10
Resulting channels: 
INV, 2, 6, 10
Firmware/Software: 
V3.2.10
Options: 
R&S CMW-KM656
Manual operation: 
See 
"Band / Channel / Frequency"
Bandwidth / MHz
<Channel> ranges for valid configuration
<Ch>=1
<Ch>=2
<Ch>=3
<Ch>=4
<Ch>=5
<Ch>=6
<Ch>=7
<Ch>=8
20
0 to 200
-
-
-
-
-
-
-
40
0 to 196
4 to 200
-
-
-
-
-
-
80
0 to 188
4 to 192
8 to 196
12 to 200
-
-
-
-
80+80
160
0 to 172
4 to 176
8 to 180
12 to 184
16 to 188
20 to 192
24 to 196
28 to 200
Top