import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CoreModule} from "../core/core.module";
import {EditorCommonModule} from "../editor-common/editor-common.module";
import {ArgumentListComponent} from "./sections/arguments/argument-list.component";
import {FileDefListComponent} from "./sections/file-def-list/file-def-list.component";
import {ResourcesComponent} from "./sections/resources/resources.component";
import {ToolInputsComponent} from "./sections/inputs/tool-inputs.component";
import {ToolInputListComponent} from "./sections/inputs/tool-input-list-component";
import {ToolOutputListComponent} from "./sections/outputs/tool-output-list.component";
import {ToolOutputsComponent} from "./sections/outputs/tool-outputs.component";
import {CWLModule} from "../cwl/cwl.module";
import {ArgumentInspector} from "./sections/arguments/argument-inspector.component";
import {BasicInputSectionComponent} from "./object-inspector/input-inspector/basic-section/basic-input-section.component";
import {BasicOutputSectionComponent} from "./object-inspector/output-inspector/output-basic-section/basic-output-section.component";
import {DescriptionComponent} from "./object-inspector/common-sections/description-section/description.component";
import {InputBindingSectionComponent} from "./object-inspector/input-inspector/input-binding/input-binding-section.component";
import {OutputMetaDataSectionComponent} from "./object-inspector/output-inspector/output-metadata-section/output-metadata.component";
import {StageInputSectionComponent} from "./object-inspector/input-inspector/stage-input-section/stage-input-section.component";
import {OutputEvalSectionComponent} from "./object-inspector/output-inspector/output-eval-section/output-eval.component";
import {FileDefInspectorComponent} from "./sections/file-def-list/file-def-inspector.component";
import {LiteralExpressionInputComponent} from "./sections/file-def-list/literal-expression-input.component";
import {SecondaryFilesComponent} from "./object-inspector/secondary-files/secondary-files.component";
import {CommandLinePreviewComponent} from "./components/command-line-preview/command-line-preview.component";
import {ToolEditorComponent} from "./tool-editor.component";
import {ToolVisualEditorComponent} from "./tool-visual-editor/tool-visual-editor.component";
import {DockerRequirementComponent} from "./sections/docker/docker-requirement.component";
import {BaseCommandComponent} from "./sections/base-command/base-command.component";
import {HintListComponent} from "./sections/hints/hint-list.component";
import {ToolInputInspector} from "./object-inspector/input-inspector/tool-input-inspector.component";
import {ToolOutputInspector} from "./object-inspector/output-inspector/tool-output-inspector.component";

@NgModule({
    declarations: [
        ArgumentInspector,
        ArgumentListComponent,
        BasicInputSectionComponent,
        BasicOutputSectionComponent,
        CommandLinePreviewComponent,
        DescriptionComponent,
        FileDefInspectorComponent,
        FileDefListComponent,
        InputBindingSectionComponent,
        LiteralExpressionInputComponent,
        OutputEvalSectionComponent,
        OutputMetaDataSectionComponent,
        ResourcesComponent,
        SecondaryFilesComponent,
        StageInputSectionComponent,
        ToolInputInspector,
        ToolInputListComponent,
        ToolInputsComponent,
        ToolOutputInspector,
        ToolOutputListComponent,
        ToolOutputsComponent,
        ToolEditorComponent,
        ToolVisualEditorComponent,
        DockerRequirementComponent,
        BaseCommandComponent,
        HintListComponent,
    ],
    exports: [
        ToolEditorComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        CWLModule,
        EditorCommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ToolEditorModule {

}
