# Configuring IP Settings

Module: WLAN Signaling
Source: 219c86fe36564eef.htm

## 原始指令文档说明
WLAN Signaling
 > 
Programming
 > 
Configuring IP Settings
Configuring IP Settings
// *****************************************************************************
// Configure the IP version support.
// *****************************************************************************
CONFigure:WLAN:SIGN:CONNection:IVSupport IV4V6
// *****************************************************************************
// Configure IP settings relevant if you have no DAU:
// subnet mask, IP address of stack, DUT, gateway and DNS,
// DHCP, IPv6 prefix of stack
// *****************************************************************************
CONFigure:WLAN:SIGN:IPVFour:STATic:SMASk 255, 255, 255, 0
CONFigure:WLAN:SIGN:IPVFour:STATic:IPADdress:STACk 100, 100, 100, 162
CONFigure:WLAN:SIGN:IPVFour:STATic:IPADdress:DESTination 100, 100, 100, 11
CONFigure:WLAN:SIGN:IPVFour:STATic:IPADdress:GATeway 100, 100, 100, 1
CONFigure:WLAN:SIGN:IPVFour:STATic:IPADdress:DNS 10, 0, 2, 166
CONFigure:WLAN:SIGN:IPVFour:DHCP ON
CONFigure:WLAN:SIGN:IPVSix:PREFix "fc01:abab:cafe:efe0::"
Top