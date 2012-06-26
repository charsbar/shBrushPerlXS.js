;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// shBrushPerlXS.js 0.01
		// Powered by Perl::APIReference 0.09

		var keywords = 
			'AvFILL BhkDISABLE BhkENABLE BhkENTRY_set CLASS Copy CopyD ' +
			'CvSTASH ENTER EXTEND FREETMPS GIMME GIMME_V G_ARRAY ' +
			'G_DISCARD G_EVAL G_NOARGS G_SCALAR G_VOID GetVars GvSV ' +
			'Gv_AMupdate HEf_SVKEY HeHASH HeKEY HeKLEN HePV HeSVKEY ' +
			'HeSVKEY_force HeSVKEY_set HeUTF8 HeVAL HvENAME HvNAME LEAVE ' +
			'LINKLIST MARK MULTICALL Move MoveD Newx Newxc ' +
			'Newxz Nullav Nullch Nullcv Nullhv Nullsv OP_CLASS ' +
			'OP_DESC OP_NAME ORIGMARK PERL_SYS_INIT PERL_SYS_INIT3 PERL_SYS_TERM PL_keyword_plugin ' +
			'PL_modglobal PL_na PL_opfreehook PL_parser PL_peepp PL_rpeepp PL_sv_no ' +
			'PL_sv_undef PL_sv_yes POP_MULTICALL POPi POPl POPn POPp ' +
			'POPpbytex POPpx POPs PUSHMARK PUSH_MULTICALL PUSHi PUSHmortal ' +
			'PUSHn PUSHp PUSHs PUSHu PUTBACK PerlIO_clearerr PerlIO_close ' +
			'PerlIO_context_layers PerlIO_eof PerlIO_error PerlIO_fileno PerlIO_fill PerlIO_flush PerlIO_get_base ' +
			'PerlIO_get_bufsiz PerlIO_get_cnt PerlIO_get_ptr PerlIO_read PerlIO_seek PerlIO_set_cnt PerlIO_set_ptrcnt ' +
			'PerlIO_setlinebuf PerlIO_stderr PerlIO_stdin PerlIO_stdout PerlIO_tell PerlIO_unread PerlIO_write ' +
			'Perl_signbit Poison PoisonFree PoisonNew PoisonWith RETVAL Renew ' +
			'Renewc SAVETMPS SP SPAGAIN ST SVt_IV SVt_NV ' +
			'SVt_PV SVt_PVAV SVt_PVCV SVt_PVHV SVt_PVMG Safefree Slab_Alloc ' +
			'Slab_Free StructCopy SvCUR SvCUR_set SvEND SvGAMAGIC SvGETMAGIC ' +
			'SvGROW SvIOK SvIOK_UV SvIOK_notUV SvIOK_off SvIOK_on SvIOK_only ' +
			'SvIOK_only_UV SvIOKp SvIV SvIVX SvIV_nomg SvIV_set SvIVx ' +
			'SvIsCOW SvIsCOW_shared_hash SvLEN SvLEN_set SvLOCK SvMAGIC_set SvNIOK ' +
			'SvNIOK_off SvNIOKp SvNOK SvNOK_off SvNOK_on SvNOK_only SvNOKp ' +
			'SvNV SvNVX SvNV_nomg SvNV_set SvNVx SvOK SvOOK ' +
			'SvOOK_offset SvPOK SvPOK_off SvPOK_on SvPOK_only SvPOK_only_UTF8 SvPOKp ' +
			'SvPV SvPVX SvPV_force SvPV_force_nomg SvPV_nolen SvPV_nomg SvPV_nomg_nolen ' +
			'SvPV_set SvPVbyte SvPVbyte_force SvPVbyte_nolen SvPVbytex SvPVbytex_force SvPVutf8 ' +
			'SvPVutf8_force SvPVutf8_nolen SvPVutf8x SvPVutf8x_force SvPVx SvREFCNT SvREFCNT_dec ' +
			'SvREFCNT_inc SvREFCNT_inc_NN SvREFCNT_inc_simple SvREFCNT_inc_simple_NN SvREFCNT_inc_simple_void SvREFCNT_inc_simple_void_NN SvREFCNT_inc_void ' +
			'SvREFCNT_inc_void_NN SvROK SvROK_off SvROK_on SvRV SvRV_set SvRX ' +
			'SvRXOK SvSETMAGIC SvSHARE SvSTASH SvSTASH_set SvSetMagicSV SvSetMagicSV_nosteal ' +
			'SvSetSV SvSetSV_nosteal SvTAINT SvTAINTED SvTAINTED_off SvTAINTED_on SvTRUE ' +
			'SvTRUE_nomg SvTYPE SvUNLOCK SvUOK SvUPGRADE SvUTF8 SvUTF8_off ' +
			'SvUTF8_on SvUV SvUVX SvUV_nomg SvUV_set SvUVx SvVOK ' +
			'THIS UNDERBAR XCPT_CATCH XCPT_RETHROW XCPT_TRY_END XCPT_TRY_START XPUSHi ' +
			'XPUSHmortal XPUSHn XPUSHp XPUSHs XPUSHu XS XSRETURN ' +
			'XSRETURN_EMPTY XSRETURN_IV XSRETURN_NO XSRETURN_NV XSRETURN_PV XSRETURN_UNDEF XSRETURN_UV ' +
			'XSRETURN_YES XST_mIV XST_mNO XST_mNV XST_mPV XST_mUNDEF XST_mYES ' +
			'XS_APIVERSION_BOOTCHECK XS_VERSION XS_VERSION_BOOTCHECK XopDISABLE XopENABLE XopENTRY XopENTRY_set ' +
			'XopFLAGS Zero ZeroD _to_uni_fold_flags _to_utf8_fold_flags amagic_call amagic_deref_call ' +
			'any_dup apply_attrs_string atfork_lock atfork_unlock av_arylen_p av_clear av_create_and_push ' +
			'av_create_and_unshift_one av_delete av_exists av_extend av_fetch av_fill av_iter_p ' +
			'av_len av_make av_pop av_push av_shift av_store av_undef ' +
			'av_unshift ax block_gimme blockhook_register bytes_cmp_utf8 bytes_from_utf8 bytes_to_utf8 ' +
			'call_argv call_atexit call_list call_method call_pv call_sv caller_cx ' +
			'calloc cast_i32 cast_iv cast_ulong cast_uv ck_entersub_args_list ck_entersub_args_proto ' +
			'ck_entersub_args_proto_or_list ck_warner ck_warner_d ckwarn ckwarn_d clone_params_del clone_params_new ' +
			'cop_hints_2hv cop_hints_fetch_pv cop_hints_fetch_pvn cop_hints_fetch_pvs cop_hints_fetch_sv cophh_2hv cophh_copy ' +
			'cophh_delete_pv cophh_delete_pvn cophh_delete_pvs cophh_delete_sv cophh_fetch_pv cophh_fetch_pvn cophh_fetch_pvs ' +
			'cophh_fetch_sv cophh_free cophh_new_empty cophh_store_pv cophh_store_pvn cophh_store_pvs cophh_store_sv ' +
			'croak croak_no_modify croak_nocontext croak_sv croak_xs_usage csighandler custom_op_desc ' +
			'custom_op_name custom_op_register custom_op_xop cv_const_sv cv_get_call_checker cv_set_call_checker cv_undef ' +
			'cx_dump cx_dup cxinc dAX dAXMARK dITEMS dMARK ' +
			'dMULTICALL dORIGMARK dSP dUNDERBAR dXCPT dXSARGS dXSI32 ' +
			'deb deb_nocontext debop debprofdump debstack debstackptrs delimcpy ' +
			'despatch_signals die die_nocontext die_sv dirp_dup do_aspawn do_binmode ' +
			'do_close do_gv_dump do_gvgv_dump do_hv_dump do_join do_magic_dump do_op_dump ' +
			'do_open do_open9 do_openn do_pmop_dump do_spawn do_spawn_nowait do_sprintf ' +
			'do_sv_dump doing_taint doref dounwind dowantarray dump_all dump_eval ' +
			'dump_fds dump_form dump_indent dump_mstats dump_packsubs dump_sub dump_vindent ' +
			'eval_pv eval_sv fbm_compile fbm_instr fetch_cop_label filter_add filter_del ' +
			'filter_read find_runcv find_rundefsv find_rundefsvoffset foldEQ foldEQ_latin1 foldEQ_locale ' +
			'foldEQ_utf8 foldEQ_utf8_flags form form_nocontext fp_dup fprintf_nocontext free_global_struct ' +
			'free_tmps get_av get_context get_cv get_cvn_flags get_hv get_mstats ' +
			'get_op_descs get_op_names get_ppaddr get_sv get_vtbl getcwd_sv gp_dup ' +
			'gp_free gp_ref grok_bin grok_hex grok_number grok_numeric_radix grok_oct ' +
			'gv_AVadd gv_HVadd gv_IOadd gv_SVadd gv_add_by_type gv_autoload4 gv_check ' +
			'gv_const_sv gv_dump gv_efullname gv_efullname3 gv_efullname4 gv_fetchfile gv_fetchfile_flags ' +
			'gv_fetchmeth gv_fetchmeth_autoload gv_fetchmethod gv_fetchmethod_autoload gv_fetchmethod_flags gv_fetchpv gv_fetchpvn_flags ' +
			'gv_fetchsv gv_fullname gv_fullname3 gv_fullname4 gv_handler gv_init gv_name_set ' +
			'gv_stashpv gv_stashpvn gv_stashpvs gv_stashsv he_dup hek_dup hv_assert ' +
			'hv_clear hv_clear_placeholders hv_common hv_common_key_len hv_copy_hints_hv hv_delayfree_ent hv_delete ' +
			'hv_delete_ent hv_eiter_p hv_eiter_set hv_exists hv_exists_ent hv_fetch hv_fetch_ent ' +
			'hv_fetchs hv_fill hv_free_ent hv_iterinit hv_iterkey hv_iterkeysv hv_iternext ' +
			'hv_iternext_flags hv_iternextsv hv_iterval hv_ksplit hv_magic hv_name_set hv_placeholders_get ' +
			'hv_placeholders_p hv_placeholders_set hv_riter_p hv_riter_set hv_scalar hv_store hv_store_ent ' +
			'hv_store_flags hv_stores hv_undef ibcmp ibcmp_locale ibcmp_utf8 init_global_struct ' +
			'init_i18nl10n init_i18nl14n init_stacks init_tm instr isALPHA isASCII ' +
			'isDIGIT isLOWER isOCTAL isSPACE isUPPER isWORDCHAR isXDIGIT ' +
			'is_ascii_string is_lvalue_sub is_uni_alnum is_uni_alnum_lc is_uni_alpha is_uni_alpha_lc is_uni_ascii ' +
			'is_uni_ascii_lc is_uni_cntrl is_uni_cntrl_lc is_uni_digit is_uni_digit_lc is_uni_graph is_uni_graph_lc ' +
			'is_uni_idfirst is_uni_idfirst_lc is_uni_lower is_uni_lower_lc is_uni_print is_uni_print_lc is_uni_punct ' +
			'is_uni_punct_lc is_uni_space is_uni_space_lc is_uni_upper is_uni_upper_lc is_uni_xdigit is_uni_xdigit_lc ' +
			'is_utf8_alnum is_utf8_alpha is_utf8_ascii is_utf8_char is_utf8_cntrl is_utf8_digit is_utf8_graph ' +
			'is_utf8_idcont is_utf8_idfirst is_utf8_lower is_utf8_mark is_utf8_perl_space is_utf8_perl_word is_utf8_posix_digit ' +
			'is_utf8_print is_utf8_punct is_utf8_space is_utf8_string is_utf8_string_loc is_utf8_string_loclen is_utf8_upper ' +
			'is_utf8_xdigit is_utf8_xidcont is_utf8_xidfirst items ix leave_scope lex_bufutf8 ' +
			'lex_discard_to lex_grow_linestr lex_next_chunk lex_peek_unichar lex_read_space lex_read_to lex_read_unichar ' +
			'lex_start lex_stuff_pv lex_stuff_pvn lex_stuff_pvs lex_stuff_sv lex_unstuff load_module ' +
			'load_module_nocontext looks_like_number mPUSHi mPUSHn mPUSHp mPUSHs mPUSHu ' +
			'mXPUSHi mXPUSHn mXPUSHp mXPUSHs mXPUSHu magic_dump malloc ' +
			'markstack_grow mess mess_nocontext mess_sv mfree mg_clear mg_copy ' +
			'mg_dup mg_find mg_findext mg_free mg_free_type mg_get mg_length ' +
			'mg_magical mg_set mg_size mini_mktime moreswitches mro_get_from_name mro_get_linear_isa ' +
			'mro_get_private_data mro_method_changed_in mro_register mro_set_mro mro_set_private_data my_atof my_atof2 ' +
			'my_bcopy my_bzero my_chsize my_cxt_index my_cxt_init my_dirfd my_exit ' +
			'my_failure_exit my_fflush_all my_fork my_htonl my_lstat my_memcmp my_memset ' +
			'my_ntohl my_pclose my_popen my_popen_list my_setenv my_snprintf my_socketpair ' +
			'my_sprintf my_stat my_strftime my_strlcat my_strlcpy my_swap my_vsnprintf ' +
			'newANONATTRSUB newANONHASH newANONLIST newANONSUB newASSIGNOP newATTRSUB newAV ' +
			'newAVREF newBINOP newCONDOP newCONSTSUB newCVREF newFORM newFOROP ' +
			'newGIVENOP newGVOP newGVREF newGVgen newHV newHVREF newHVhv ' +
			'newIO newLISTOP newLOGOP newLOOPEX newLOOPOP newMYSUB newNULLLIST ' +
			'newOP newPADOP newPMOP newPROG newPVOP newRANGE newRV ' +
			'newRV_inc newRV_noinc newSLICEOP newSTATEOP newSUB newSV newSVOP ' +
			'newSVREF newSV_type newSVhek newSViv newSVnv newSVpv newSVpv_share ' +
			'newSVpvf newSVpvf_nocontext newSVpvn newSVpvn_flags newSVpvn_share newSVpvn_utf8 newSVpvs ' +
			'newSVpvs_flags newSVpvs_share newSVrv newSVsv newSVuv newUNOP newWHENOP ' +
			'newWHILEOP newXS newXS_flags newXSproto new_collate new_ctype new_numeric ' +
			'new_stackinfo new_version ninstr nothreadhook op_append_elem op_append_list op_contextualize ' +
			'op_dump op_free op_linklist op_lvalue op_null op_prepend_elem op_refcnt_lock ' +
			'op_refcnt_unlock op_scope pack_cat packlist pad_findmy pad_sv parse_arithexpr ' +
			'parse_barestmt parse_block parse_fullexpr parse_fullstmt parse_label parse_listexpr parse_stmtseq ' +
			'parse_termexpr parser_dup perl_alloc perl_alloc_using perl_clone perl_clone_using perl_construct ' +
			'perl_destruct perl_free perl_parse perl_run pmop_dump pop_scope pregcomp ' +
			'pregexec pregfree pregfree2 prescan_version printf_nocontext ptr_table_clear ptr_table_fetch ' +
			'ptr_table_free ptr_table_new ptr_table_split ptr_table_store push_scope pv_display pv_escape ' +
			'pv_pretty pv_uni_display re_compile re_dup_guts re_intuit_start re_intuit_string realloc ' +
			'reentrant_free reentrant_init reentrant_retry reentrant_size ref reg_named_buff_all reg_named_buff_exists ' +
			'reg_named_buff_fetch reg_named_buff_firstkey reg_named_buff_nextkey reg_named_buff_scalar regclass_swash regdump regdupe_internal ' +
			'regexec_flags regfree_internal reginitcolors regnext repeatcpy require_pv rninstr ' +
			'rsignal rsignal_state runops_debug runops_standard rv2cv_op_cv rvpv_dup safesyscalloc ' +
			'safesysfree safesysmalloc safesysrealloc save_I16 save_I32 save_I8 save_adelete ' +
			'save_aelem save_aelem_flags save_alloc save_aptr save_ary save_bool save_clearsv ' +
			'save_delete save_destructor save_destructor_x save_freeop save_freepv save_freesv save_generic_pvref ' +
			'save_generic_svref save_gp save_hash save_hdelete save_helem save_helem_flags save_hints ' +
			'save_hptr save_int save_item save_iv save_list save_long save_mortalizesv ' +
			'save_nogv save_op save_padsv_and_mortalize save_pptr save_pushi32ptr save_pushptr save_pushptrptr ' +
			'save_re_context save_scalar save_set_svflags save_shared_pvref save_sptr save_svref save_vptr ' +
			'savepv savepvn savepvs savesharedpv savesharedpvn savesharedpvs savesharedsvpv ' +
			'savestack_grow savestack_grow_cnt savesvpv scan_bin scan_hex scan_num scan_oct ' +
			'scan_version scan_vstring screaminstr seed set_context set_numeric_local set_numeric_radix ' +
			'set_numeric_standard setdefout share_hek si_dup sortsv sortsv_flags ss_dup ' +
			'stack_grow start_subparse stashpv_hvname_match strEQ strGE strGT strLE ' +
			'strLT strNE str_to_version strnEQ strnNE sv_2bool sv_2bool_flags ' +
			'sv_2cv sv_2io sv_2iv sv_2iv_flags sv_2mortal sv_2nv_flags sv_2pv ' +
			'sv_2pv_flags sv_2pv_nolen sv_2pvbyte sv_2pvbyte_nolen sv_2pvutf8 sv_2pvutf8_nolen sv_2uv ' +
			'sv_2uv_flags sv_backoff sv_bless sv_cat_decode sv_catpv sv_catpv_flags sv_catpv_mg ' +
			'sv_catpv_nomg sv_catpvf sv_catpvf_mg sv_catpvf_mg_nocontext sv_catpvf_nocontext sv_catpvn sv_catpvn_flags ' +
			'sv_catpvn_mg sv_catpvn_nomg sv_catpvs sv_catpvs_flags sv_catpvs_mg sv_catpvs_nomg sv_catsv ' +
			'sv_catsv_flags sv_catsv_mg sv_catsv_nomg sv_chop sv_clear sv_cmp sv_cmp_flags ' +
			'sv_cmp_locale sv_cmp_locale_flags sv_collxfrm sv_collxfrm_flags sv_compile_2op sv_copypv sv_dec ' +
			'sv_dec_nomg sv_derived_from sv_destroyable sv_does sv_dump sv_dup sv_dup_inc ' +
			'sv_eq sv_eq_flags sv_force_normal sv_force_normal_flags sv_free sv_gets sv_grow ' +
			'sv_inc sv_inc_nomg sv_insert sv_insert_flags sv_isa sv_isobject sv_iv ' +
			'sv_len sv_len_utf8 sv_magic sv_magicext sv_mortalcopy sv_newmortal sv_newref ' +
			'sv_nolocking sv_nosharing sv_nounlocking sv_nv sv_peek sv_pos_b2u sv_pos_u2b ' +
			'sv_pos_u2b_flags sv_pv sv_pvbyte sv_pvbyten sv_pvbyten_force sv_pvn sv_pvn_force ' +
			'sv_pvn_force_flags sv_pvn_nomg sv_pvutf8 sv_pvutf8n sv_pvutf8n_force sv_recode_to_utf8 sv_reftype ' +
			'sv_replace sv_report_used sv_reset sv_rvweaken sv_setiv sv_setiv_mg sv_setnv ' +
			'sv_setnv_mg sv_setpv sv_setpv_mg sv_setpvf sv_setpvf_mg sv_setpvf_mg_nocontext sv_setpvf_nocontext ' +
			'sv_setpviv sv_setpviv_mg sv_setpvn sv_setpvn_mg sv_setpvs sv_setpvs_mg sv_setref_iv ' +
			'sv_setref_nv sv_setref_pv sv_setref_pvn sv_setref_pvs sv_setref_uv sv_setsv sv_setsv_flags ' +
			'sv_setsv_mg sv_setsv_nomg sv_setuv sv_setuv_mg sv_taint sv_tainted sv_true ' +
			'sv_uni_display sv_unmagic sv_unmagicext sv_unref sv_unref_flags sv_untaint sv_upgrade ' +
			'sv_usepvn sv_usepvn_flags sv_usepvn_mg sv_utf8_decode sv_utf8_downgrade sv_utf8_encode sv_utf8_upgrade ' +
			'sv_utf8_upgrade_flags sv_utf8_upgrade_flags_grow sv_utf8_upgrade_nomg sv_uv sv_vcatpvf sv_vcatpvf_mg sv_vcatpvfn ' +
			'sv_vsetpvf sv_vsetpvf_mg sv_vsetpvfn svtype swash_fetch swash_init sys_init ' +
			'sys_init3 sys_intern_clear sys_intern_dup sys_intern_init sys_term taint_env taint_proper ' +
			'tmps_grow toLOWER toUPPER to_uni_fold to_uni_lower to_uni_lower_lc to_uni_title ' +
			'to_uni_title_lc to_uni_upper to_uni_upper_lc to_utf8_case to_utf8_fold to_utf8_lower to_utf8_title ' +
			'to_utf8_upper unlnk unpack_str unpackstring unsharepvn upg_version utf16_to_utf8 ' +
			'utf16_to_utf8_reversed utf8_distance utf8_hop utf8_length utf8_to_bytes utf8_to_uvchr utf8_to_uvuni ' +
			'utf8n_to_uvchr utf8n_to_uvuni uvchr_to_utf8 uvchr_to_utf8_flags uvuni_to_utf8 uvuni_to_utf8_flags vcmp ' +
			'vcroak vdeb vform vload_module vmess vnewSVpvf vnormal ' +
			'vnumify vstringify vverify vwarn vwarner warn warn_nocontext ' +
			'warn_sv warner warner_nocontext whichsig ';

		// the following datatypes/functions/kewords definitions are ripped from shBrushCpp.js (Copyright 2006 Shin, YoungJin)
		var c_datatypes =	'ATOM BOOL BOOLEAN BYTE CHAR COLORREF DWORD DWORDLONG DWORD_PTR ' +
						'DWORD32 DWORD64 FLOAT HACCEL HALF_PTR HANDLE HBITMAP HBRUSH ' +
						'HCOLORSPACE HCONV HCONVLIST HCURSOR HDC HDDEDATA HDESK HDROP HDWP ' +
						'HENHMETAFILE HFILE HFONT HGDIOBJ HGLOBAL HHOOK HICON HINSTANCE HKEY ' +
						'HKL HLOCAL HMENU HMETAFILE HMODULE HMONITOR HPALETTE HPEN HRESULT ' +
						'HRGN HRSRC HSZ HWINSTA HWND INT INT_PTR INT32 INT64 LANGID LCID LCTYPE ' +
						'LGRPID LONG LONGLONG LONG_PTR LONG32 LONG64 LPARAM LPBOOL LPBYTE LPCOLORREF ' +
						'LPCSTR LPCTSTR LPCVOID LPCWSTR LPDWORD LPHANDLE LPINT LPLONG LPSTR LPTSTR ' +
						'LPVOID LPWORD LPWSTR LRESULT PBOOL PBOOLEAN PBYTE PCHAR PCSTR PCTSTR PCWSTR ' +
						'PDWORDLONG PDWORD_PTR PDWORD32 PDWORD64 PFLOAT PHALF_PTR PHANDLE PHKEY PINT ' +
						'PINT_PTR PINT32 PINT64 PLCID PLONG PLONGLONG PLONG_PTR PLONG32 PLONG64 POINTER_32 ' +
						'POINTER_64 PSHORT PSIZE_T PSSIZE_T PSTR PTBYTE PTCHAR PTSTR PUCHAR PUHALF_PTR ' +
						'PUINT PUINT_PTR PUINT32 PUINT64 PULONG PULONGLONG PULONG_PTR PULONG32 PULONG64 ' +
						'PUSHORT PVOID PWCHAR PWORD PWSTR SC_HANDLE SC_LOCK SERVICE_STATUS_HANDLE SHORT ' +
						'SIZE_T SSIZE_T TBYTE TCHAR UCHAR UHALF_PTR UINT UINT_PTR UINT32 UINT64 ULONG ' +
						'ULONGLONG ULONG_PTR ULONG32 ULONG64 USHORT USN VOID WCHAR WORD WPARAM WPARAM WPARAM ' +
						'char bool short int __int32 __int64 __int8 __int16 long float double __wchar_t ' +
						'clock_t _complex _dev_t _diskfree_t div_t ldiv_t _exception _EXCEPTION_POINTERS ' +
						'FILE _finddata_t _finddatai64_t _wfinddata_t _wfinddatai64_t __finddata64_t ' +
						'__wfinddata64_t _FPIEEE_RECORD fpos_t _HEAPINFO _HFILE lconv intptr_t ' +
						'jmp_buf mbstate_t _off_t _onexit_t _PNH ptrdiff_t _purecall_handler ' +
						'sig_atomic_t size_t _stat __stat64 _stati64 terminate_function ' +
						'time_t __time64_t _timeb __timeb64 tm uintptr_t _utimbuf ' +
						'va_list wchar_t wctrans_t wctype_t wint_t signed';

		var c_keywords =	'auto break case catch class const decltype __finally __exception __try ' +
						'const_cast continue private public protected __declspec ' +
						'default delete deprecated dllexport dllimport do dynamic_cast ' +
						'else enum explicit extern if for friend goto inline ' +
						'mutable naked namespace new noinline noreturn nothrow ' +
						'register reinterpret_cast return selectany ' +
						'sizeof static static_cast struct switch template this ' +
						'thread throw true false try typedef typeid typename union ' +
						'using uuid virtual void volatile whcar_t while';

		var c_functions =	'assert isalnum isalpha iscntrl isdigit isgraph islower isprint' +
						'ispunct isspace isupper isxdigit tolower toupper errno localeconv ' +
						'setlocale acos asin atan atan2 ceil cos cosh exp fabs floor fmod ' +
						'frexp ldexp log log10 modf pow sin sinh sqrt tan tanh jmp_buf ' +
						'longjmp setjmp raise signal sig_atomic_t va_arg va_end va_start ' +
						'clearerr fclose feof ferror fflush fgetc fgetpos fgets fopen ' +
						'fprintf fputc fputs fread freopen fscanf fseek fsetpos ftell ' +
						'fwrite getc getchar gets perror printf putc putchar puts remove ' +
						'rename rewind scanf setbuf setvbuf sprintf sscanf tmpfile tmpnam ' +
						'ungetc vfprintf vprintf vsprintf abort abs atexit atof atoi atol ' +
						'bsearch calloc div exit free getenv labs ldiv malloc mblen mbstowcs ' +
						'mbtowc qsort rand realloc srand strtod strtol strtoul system ' +
						'wcstombs wctomb memchr memcmp memcpy memmove memset strcat strchr ' +
						'strcmp strcoll strcpy strcspn strerror strlen strncat strncmp ' +
						'strncpy strpbrk strrchr strspn strstr strtok strxfrm asctime ' +
						'clock ctime difftime gmtime localtime mktime strftime time';
		// end of ripped definitions

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,	css: 'string' },
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,	css: 'string' },
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },			// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },
			{ regex: /^ *# +.*$/gm,										css: 'comments' },
			{ regex: /^ *#.*/gm,										css: 'preprocessor' },

			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),	css: 'keyword bold' },
			{ regex: new RegExp(this.getKeywords(c_datatypes), 'gm'),	css: 'color1' },
			{ regex: new RegExp(this.getKeywords(c_functions), 'gm'),	css: 'functions' },
			{ regex: new RegExp(this.getKeywords(c_keywords), 'gm'),	css: 'keyword' }
		];

		this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);
	}

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases		= ['perlxs', 'PerlXS', 'xs'];

	SyntaxHighlighter.brushes.PerlXS = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();