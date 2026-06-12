# CONFigureWLANMEASiISIGnalSTANdard

Module: WLAN Measurements
Source: da2972b238384413.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Input Signal Settings
 > 
CONFigure:WLAN:MEAS<i>:ISIGnal:STANdard
CONFigure:WLAN:MEAS<i>:ISIGnal:STANdard 
<Standard>
Selects the IEEE 802.11 standard. Several WLAN signal properties depend on the selected standard, see 
"Physical Layer"
.
In the combined signal path scenario, selecting a standard that is not supported by the signaling application restores the standalone scenario.
Parameters:
<Standard>
DSSS |
 
 LOFDm |
 
 HTOFdm |
 
 POFDm |
 
 VHTofdm |
 
 HEOFdm
DSSS
: 802.11b/g (DSSS)
LOFDm
: 802.11a/g (OFDM)
HTOFdm
: 802.11n (requires R&S CMW-KM651)
POFDm
: 802.11p (requires R&S CMW-KM655)
VHTofdm
: 802.11ac (requires R&S CMW-KM651 and -KM656)
HEOFdm
: 802.11ax (R&S
 
CMW with TRX160 only, requires R&S CMW-KM651, -KM656, and -KM657)
*RST:
LOFD
Example: 
See 
"Specifying General Measurement Settings"
Firmware/Software: 
V3.5.30
V3.7.20: added HEOFdm
Manual operation: 
See 
"Standard"
In software version 3.5.30, the values have been redesigned. The receive mode and MIMO scenario settings are now configured via separate commands.
The old values are still supported for backward compatibility. The following table shows the mapping of the old values to the new values:
Old <Standard> values (deprecated)
New <Standard>, <ReceiveMode>, <Scenario>
BDSSs | GDSSs
DSSS, SISO, SALone | CSPath
AOFDm | GOFDm
LOFDm, SISO, SALone | CSPath
NSISo | NOFDm
HTOFdm, SISO, SALone | CSPath
CMIMo | MISO
HTOFdm, CMIMo, SALone
POFDm
POFDm, SISO, SALone
SMIMo
HTOFdm, SMIMo, MIMO2x2
HTOFdm, SMIMo, SMI4
ACSiso
VHTofdm, SISO, SALone
-
HEOFdm, SISO, SALone
HEOFdm, SMIMo, MIMO2x2
Top