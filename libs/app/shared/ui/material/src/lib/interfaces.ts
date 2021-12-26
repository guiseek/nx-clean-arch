export interface FormFieldConfig {
  appearance?: 'standard' | 'fill' | 'outline' | 'legacy'
  floatLabel?: 'auto' | 'always' | 'never'
  hideRequiredMarker?: boolean
}

export interface CheckboxConfig {
  color: 'primary' | 'accent'
}

export interface SidenavConfig {
  autoSize: true
}

export interface MaterialConfig {
  formField?: FormFieldConfig
  checkbox?: CheckboxConfig
  sidenav?: SidenavConfig
}
