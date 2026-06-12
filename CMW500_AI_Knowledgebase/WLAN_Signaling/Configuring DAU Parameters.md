# Configuring DAU Parameters

Module: WLAN Signaling
Source: af92057d7a844e8e.htm

## 原始指令文档说明
WLAN Signaling
 > 
Programming
 > 
Configuring DAU Parameters
Configuring DAU Parameters
// *****************************************************************************
// Configure the IP address to be assigned to the DUT. Use an internal DAU.
// Set TID for end-to-end connections.
// *****************************************************************************
CONFigure:WLAN:SIGN:ETOE:DUIP ON,100,100,100,10
CONFigure:WLAN:SIGN:EDAU:ENABle OFF
CONFigure:WLAN:SIGN:CONNection:QOS:ETOE TID1
// *****************************************************************************
// To use an external DAU: enable external DAU usage, define network segment
// and subnet node ID of the instrument with DAU.
// *****************************************************************************
CONFigure:WLAN:SIGN:EDAU:ENABle ON
CONFigure:WLAN:SIGN:EDAU:NSEGment A
CONFigure:WLAN:SIGN:EDAU:NID 5
// *****************************************************************************
// Configure routes for the station mode.
// *****************************************************************************
CONF:WLAN:SIGN:ETOE:IRList:IPR1 ON,192,168,20,0,24,"fc01:abab:cafe:efe0::",64
CONF:WLAN:SIGN:ETOE:IRList:IPR1 ON,192,168,20,0,28,"fc01:abab:cafe:efe5::",64
CONF:WLAN:SIGN:ETOE:IRList:IPR1 ON,192,168,20,0,32,"fc01:abab:cafe:efe8::",64
Top