# Querying MS Measurement Reports

Module: GSM Signaling
Source: 3823d7236b174ebf.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Querying MS Measurement Reports
Querying MS Measurement Reports
// ***************************************************************************** 
// Ask for the MS reports related to neighbor cells, query two cells 
// per supported RAT.
// ***************************************************************************** 
SENSe:GSM:SIGN:RREPort:NCELl:GSM:CELL1?
SENSe:GSM:SIGN:RREPort:NCELl:GSM:CELL2?
SENSe:GSM:SIGN:RREPort:NCELl:GSM:CELL1:RANGe?
SENSe:GSM:SIGN:RREPort:NCELl:GSM:CELL2:RANGe?
SENSe:GSM:SIGN:RREPort:NCELl:LTE:CELL1?
SENSe:GSM:SIGN:RREPort:NCELl:LTE:CELL2?
SENSe:GSM:SIGN:RREPort:NCELl:LTE:CELL1:RANGe?
SENSe:GSM:SIGN:RREPort:NCELl:LTE:CELL2:RANGe?
SENSe:GSM:SIGN:RREPort:NCELl:TDSCdma:CELL1?
SENSe:GSM:SIGN:RREPort:NCELl:TDSCdma:CELL2?
SENSe:GSM:SIGN:RREPort:NCELl:TDSCdma:CELL1:RANGe?
SENSe:GSM:SIGN:RREPort:NCELl:TDSCdma:CELL2:RANGe?
SENSe:GSM:SIGN:RREPort:NCELl:WCDMa:CELL1?
SENSe:GSM:SIGN:RREPort:NCELl:WCDMa:CELL2?
SENSe:GSM:SIGN:RREPort:NCELl:WCDMa:CELL1:RANGe?
SENSe:GSM:SIGN:RREPort:NCELl:WCDMa:CELL2:RANGe?
// ***************************************************************************** 
// Ask for the MS reports related to enhanced measurements. Query
// mean BEP and CV BEP with their ranges and the number of received
// blocks.
// ***************************************************************************** 
SENSe:GSM:SIGN:RREPort:CSWitched:MBEP?
SENSe:GSM:SIGN:RREPort:CSWitched:MBEP:RANGe?
SENSe:GSM:SIGN:RREPort:CSWitched:CBEP?
SENSe:GSM:SIGN:RREPort:CSWitched:CBEP:RANGe?
SENSe:GSM:SIGN:RREPort:CSWitched:NRBLocks?
Top