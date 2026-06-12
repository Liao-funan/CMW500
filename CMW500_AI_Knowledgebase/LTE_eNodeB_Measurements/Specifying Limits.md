# Specifying Limits

Module: LTE eNodeB Measurements
Source: 27c31956e6ed493c.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Programming
 > 
Specifying Limits
Specifying Limits
// *****************************************************************************
// Define QPSK modulation limits.
// Commands for 16-QAM and 64-QAM are analogous with
// mnemonic QAM16 or QAM64 instead of QPSK.
// *****************************************************************************
CONFigure:LTE:MEAS:ENB:MEValuation:LIMit:QPSK:EVMagnitude 20, 40
CONFigure:LTE:MEAS:ENB:MEValuation:LIMit:QPSK:MERRor 20, OFF
CONFigure:LTE:MEAS:ENB:MEValuation:LIMit:QPSK:PERRor 20, OFF
CONFigure:LTE:MEAS:ENB:MEValuation:LIMit:QPSK:FERRor 0.15
CONFigure:LTE:MEAS:ENB:MEValuation:LIMit:QPSK:IQOFfset -26
CONFigure:LTE:MEAS:ENB:MEValuation:LIMit:QPSK:TALignment 90
// *****************************************************************************
// Define ACLR limits.
// *****************************************************************************
CONFigure:LTE:MEAS:ENB:MEValuation:LIMit:ACLR:UTRA:CBANdwidth14 40, -50
CONFigure:LTE:MEAS:ENB:MEValuation:LIMit:ACLR:EUTRa:CBANdwidth14 40, -50
// *****************************************************************************
// Define spectrum emission limits.
// *****************************************************************************
CONFigure:LTE:MEAS:ENB:MEValuation:LIMit:SEMask:OBWLimit:CBANdwidth14 1.2E+6
CONF:LTE:MEAS:ENB:MEV:LIM:SEM:LIM1:CBAN14 ON,5E+4,15E+5,-28,4.3,OFF,K100
// *****************************************************************************
// Define power limits.
// *****************************************************************************
CONFigure:LTE:MEAS:ENB:MEValuation:LIMit:POWer:ENABle OFF
CONFigure:LTE:MEAS:ENB:MEValuation:LIMit:POWer:OPOWer -83
Top