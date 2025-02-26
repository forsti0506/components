/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import {MatLegacyTableModule} from '@angular/material/legacy-table';
import {MatDefaultEnabledColumnResizeModule} from '@angular/material-experimental/column-resize';

import {DefaultEnabledColumnResizeFlexExample} from './default-enabled-column-resize-flex-example';

@NgModule({
  imports: [MatDefaultEnabledColumnResizeModule, MatLegacyTableModule],
  declarations: [DefaultEnabledColumnResizeFlexExample],
  exports: [DefaultEnabledColumnResizeFlexExample],
})
export class DefaultEnabledColumnResizeFlexExampleModule {}
