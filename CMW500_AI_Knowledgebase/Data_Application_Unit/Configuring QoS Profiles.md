# Configuring QoS Profiles

Module: Data Application Unit
Source: 9345af88521243f5.htm

## 原始指令文档说明
Data Application Unit
 > 
Programming
 > 
Data Application Measurements
 > 
Configuring QoS Profiles
Configuring QoS Profiles
// *****************************************************************************
// Enable the QoS feature. Enable QoS profile number 1.
// *****************************************************************************
SOURce:DATA:MEAS:QOS:STATe ON
CONFigure:DATA:MEAS:QOS:FILTer1:ENABle ON
// *****************************************************************************
// Configure filter criteria of QoS profile number 1.
// *****************************************************************************
CONFigure:DATA:MEAS:QOS:FILTer1:IPADdress '172.22.1.110'
CONFigure:DATA:MEAS:QOS:FILTer1:PROTocol TCP
CONFigure:DATA:MEAS:QOS:FILTer1:SRCPrange 0, 0
CONFigure:DATA:MEAS:QOS:FILTer1:PRANge 0, 0
// *****************************************************************************
// Configure actions for QoS profile number 1.
// *****************************************************************************
CONFigure:DATA:MEAS:QOS:FILTer1:TCPackprio:ENABle ON
CONFigure:DATA:MEAS:QOS:FILTer1:HOPLmt 10
// *****************************************************************************
// Configure network impairments for QoS profile number 1.
// *****************************************************************************
CONFigure:DATA:MEAS:QOS:FILTer1:PLRate 10
CONFigure:DATA:MEAS:QOS:FILTer1:DELay 1
CONFigure:DATA:MEAS:QOS:FILTer1:JITTer 0.5
CONFigure:DATA:MEAS:QOS:FILTer1:JDIStribut UNIForm
CONFigure:DATA:MEAS:QOS:FILTer1:RRATe 10
CONFigure:DATA:MEAS:QOS:FILTer1:DRATe 0
CONFigure:DATA:MEAS:QOS:FILTer1:CRATe 1
CONFigure:DATA:MEAS:QOS:FILTer1:BITRate 100000
// *****************************************************************************
// Create Q0S profile number 2, enable it and assign a target address
// *****************************************************************************
CONFigure:DATA:MEAS:QOS:FILTer:ADD
CONFigure:DATA:MEAS:QOS:FILTer2:ENABle ON
CONFigure:DATA:MEAS:QOS:FILTer2:IPADdress '172.22.4.220'
Top